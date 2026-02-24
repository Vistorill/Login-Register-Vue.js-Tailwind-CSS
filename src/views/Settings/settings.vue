<template>
  <div class="space-y-6">
    <!-- Título -->
    <div>
      <h1 class="text-3xl font-bold text-white">Configurações</h1>
      <p class="text-gray-400">Gerencie as configurações do seu sistema</p>
    </div>

    <!-- Abas -->
    <div class="border-b border-gray-700">
      <div class="flex gap-6">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-4 py-3 font-medium border-b-2 transition',
            activeTab === tab 
              ? 'text-blue-400 border-blue-500' 
              : 'text-gray-400 border-transparent hover:text-gray-300'
          ]"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Perfil -->
    <div v-if="activeTab === 'Perfil'" class="space-y-6">
      <div class="bg-[#1a1a2e] rounded-lg p-8 border border-gray-700">
        <h3 class="text-xl font-semibold text-white mb-6">Informações do Perfil</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
            <input type="text" value="Administrador" class="w-full bg-[#0f172a] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input type="email" value="admin@findflow.com" class="w-full bg-[#0f172a] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
            <input type="tel" value="(11) 98765-4321" class="w-full bg-[#0f172a] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Cargo</label>
            <input type="text" value="Administrador do Sistema" class="w-full bg-[#0f172a] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>
        </div>

        <div class="mt-6">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>

    <!-- Segurança -->
    <div v-if="activeTab === 'Segurança'" class="space-y-6">
      <div class="bg-[#1a1a2e] rounded-lg p-8 border border-gray-700">
        <h3 class="text-xl font-semibold text-white mb-6">Alterar Senha</h3>
        
        <div class="space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Senha Atual</label>
            <input type="password" placeholder="••••••••" class="w-full bg-[#0f172a] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Nova Senha</label>
            <input type="password" placeholder="••••••••" class="w-full bg-[#0f172a] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Confirmar Senha</label>
            <input type="password" placeholder="••••••••" class="w-full bg-[#0f172a] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>

          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            Atualizar Senha
          </button>
        </div>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-8 border border-gray-700">
        <h3 class="text-xl font-semibold text-white mb-6">Autenticação de Dois Fatores</h3>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-300">Adicionar uma camada extra de segurança à sua conta</p>
            <p class="text-sm text-gray-500 mt-1">Status: Desativada</p>
          </div>
          <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium">
            Ativar
          </button>
        </div>
      </div>
    </div>

    <!-- Notificações -->
    <div v-if="activeTab === 'Notificações'" class="space-y-6">
      <div class="bg-[#1a1a2e] rounded-lg p-8 border border-gray-700">
        <h3 class="text-xl font-semibold text-white mb-6">Preferências de Notificações</h3>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-white">Notificações de Pagamentos</p>
              <p class="text-sm text-gray-500">Receba alertas sobre pagamentos recebidos</p>
            </div>
            <input type="checkbox" checked class="w-5 h-5 cursor-pointer" />
          </div>

          <div class="flex items-center justify-between py-4 border-t border-gray-700">
            <div>
              <p class="text-white">Alertas de Vencimentos</p>
              <p class="text-sm text-gray-500">Receba lembretes sobre pagamentos vencendo</p>
            </div>
            <input type="checkbox" checked class="w-5 h-5 cursor-pointer" />
          </div>

          <div class="flex items-center justify-between py-4 border-t border-gray-700">
            <div>
              <p class="text-white">Relatórios Agendados</p>
              <p class="text-sm text-gray-500">Receba relatórios automáticos</p>
            </div>
            <input type="checkbox" class="w-5 h-5 cursor-pointer" />
          </div>

          <div class="flex items-center justify-between py-4 border-t border-gray-700">
            <div>
              <p class="text-white">Notificações de Sistema</p>
              <p class="text-sm text-gray-500">Receba atualizações sobre o sistema</p>
            </div>
            <input type="checkbox" checked class="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        <div class="mt-6">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            Salvar Preferências
          </button>
        </div>
      </div>
    </div>

    <!-- Sistema -->
    <div v-if="activeTab === 'Sistema'" class="space-y-6">
      <div class="bg-[#1a1a2e] rounded-lg p-8 border border-gray-700">
        <h3 class="text-xl font-semibold text-white mb-6">Informações do Sistema</h3>
        
        <div class="space-y-4">
          <div class="flex justify-between pb-4 border-b border-gray-700">
            <span class="text-gray-400">Versão</span>
            <span class="text-white font-medium">2.0.5</span>
          </div>

          <div class="flex justify-between pb-4 border-b border-gray-700">
            <span class="text-gray-400">Data da Instalação</span>
            <span class="text-white font-medium">15 de Janeiro, 2025</span>
          </div>

          <div class="flex justify-between pb-4 border-b border-gray-700">
            <span class="text-gray-400">Último Update</span>
            <span class="text-white font-medium">20 de Fevereiro, 2026</span>
          </div>

          <div class="flex justify-between pb-4 border-b border-gray-700">
            <span class="text-gray-400">Usuários Ativos</span>
            <span class="text-white font-medium">2.543</span>
          </div>

          <div class="flex justify-between py-4">
            <span class="text-gray-400">Espaço em Disco</span>
            <span class="text-white font-medium">485 GB / 1 TB</span>
          </div>
        </div>

        <div class="mt-6 flex gap-4">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            Verificar Atualizações
          </button>
          <button class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded font-medium">
            Fazer Backup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('Perfil')
const tabs = ['Perfil', 'Segurança', 'Notificações', 'Sistema']
</script>
