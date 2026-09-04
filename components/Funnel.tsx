'use client'

import { useState } from 'react'
import styles from './Funnel.module.css'
import LeadForm from './LeadForm'
import PaymentForm from './PaymentForm'

interface FunnelProps {
  currentStep: number
  setCurrentStep: (step: number) => void
}

export default function Funnel({ currentStep, setCurrentStep }: FunnelProps) {
  const steps = [
    { id: 1, name: 'Lead', description: 'Capture seu lead' },
    { id: 2, name: 'Email', description: 'Confirme o email' },
    { id: 3, name: 'Pagamento', description: 'Efetue o pagamento' },
    { id: 4, name: 'Cliente', description: 'Bem-vindo!' }
  ]

  return (
    <section id="funnel" className={styles.funnel}>
      <div className={styles.container}>
        <h2>Seu Funil de Conversão</h2>
        
        {/* Steps Indicator */}
        <div className={styles.stepsIndicator}>
          {steps.map((step) => (
            <div key={step.id} className={`${styles.step} ${currentStep >= step.id ? styles.active : ''}`}>
              <div className={styles.stepNumber}>{step.id}</div>
              <div className={styles.stepInfo}>
                <p className={styles.stepName}>{step.name}</p>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className={styles.formContainer}>
          {currentStep === 0 && (
            <div className={styles.welcome}>
              <h3>Comece Agora!</h3>
              <p>Preencha o formulário abaixo para iniciar sua jornada de conversão</p>
              <button className={styles.btnStart} onClick={() => setCurrentStep(1)}>
                Iniciar Funil
              </button>
            </div>
          )}
          
          {currentStep === 1 && (
            <LeadForm onNext={() => setCurrentStep(2)} />
          )}
          
          {currentStep === 2 && (
            <div className={styles.step2}>
              <h3>Confirme seu Email</h3>
              <p>Enviamos um código de confirmação para seu email. Digite abaixo:</p>
              <input 
                type="text" 
                placeholder="Código de confirmação (ex: 123456)"
                className={styles.input}
              />
              <button 
                className={styles.btnPrimary}
                onClick={() => setCurrentStep(3)}
              >
                Confirmar Email
              </button>
            </div>
          )}
          
          {currentStep === 3 && (
            <PaymentForm onSuccess={() => setCurrentStep(4)} />
          )}
          
          {currentStep === 4 && (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3>Parabéns!</h3>
              <p>Você se tornou um cliente ConversãoTotal</p>
              <p>Um email de boas-vindas foi enviado para você</p>
              <button 
                className={styles.btnPrimary}
                onClick={() => setCurrentStep(0)}
              >
                Voltar ao Início
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
