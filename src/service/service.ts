import type { Router } from 'vue-router'

interface LoginData {
  email: string
  password: string
}

/**
 * Função para processar o login e redirecionar para a home
 * @param loginData - Dados do formulário de login (email/username e password)
 * @param router - Instância do Vue Router para redirecionar
 */
export const handleLogin = async (loginData: LoginData, router: Router): Promise<void> => {
  try {
    // Validar se os dados foram preenchidos
    if (!loginData.email || !loginData.password) {
      console.error('Email e senha são obrigatórios')
      throw new Error('Preencha todos os campos')
    }

    // Aqui você pode adicionar validação, chamada à API, etc.
    console.log('Dados do login:', {
      email: loginData.email,
      password: '***' // Nunca exibir a senha em logs
    })

    // Simular validação ou chamada à API
    // await validarCredenciais(loginData)

    // Redirecionar para a home após login bem-sucedido
    await router.push({ name: 'home' })
    
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    throw error
  }
}
