<?php

namespace App\Form;

use App\Entity\Autorisation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
class AutorisationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('motifAutorisation' , TextareaType::class, [
                'label_attr' => [
              
                'class' => 'form-label',
          
                ],  'translation_domain' => 'messages','label'=>'motif'])
            ->add('dateSortie',DateTimeType::class, array('widget' => 'single_text' ,  'required' => false , 'label_attr' => [
                'class' => 'form-label',
            ],'html5' => false,  'label'=>'date_debut'))
            ->add('dateRentree', DateTimeType::class, array('widget' => 'single_text' ,  'required' => false , 'label_attr' => [
                'class' => 'form-label',
            ],'html5' => false ,  'label'=>'date_fin' ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Autorisation::class,
        ]);
    }
}
