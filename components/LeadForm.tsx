'use client'

import { useState } from 'react'
import styles from './LeadForm.module.css'

interface LeadFormProps {
  onNext: () => void
}

export default function LeadForm({ onNext }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simula envio de dados
    setTimeout(() => {
      console.log('Lead capturado:', formData)
      setLoading(false)
      onNext()
    }, 1000)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Capture seu Lead</h3>
      <p>Preencha os dados abaixo para continuar</p>

      <div className={styles.formGroup}>
        <label htmlFor="name">Nome Completo *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="João Silva"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="joao@example.com"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(11) 98765-4321"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="company">Empresa</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Sua Empresa Ltda"
        />
      </div>

      <button 
        type="submit" 
        className={styles.btnSubmit}
        disabled={loading}
      >
        {loading ? 'Carregando...' : 'Próximo Passo'}
      </button>
    </form>
  )
}
