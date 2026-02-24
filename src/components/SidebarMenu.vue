<template>
  <aside :class="[
    'bg-[#0f172a] text-white min-h-screen p-4 transition-all duration-300',
    isOpen ? 'w-64' : 'w-16'
  ]">

    <div class="flex items-center justify-between mb-8">
      <h1 v-show="isOpen" class="text-xl font-bold flex items-center gap-2">
        <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold">$</div>
        <span>FindFlow</span>
      </h1>
      <button @click="toggleSidebar" class="p-2 hover:bg-gray-700 rounded">
        <Bars3Icon v-if="!isOpen" class="w-6 h-6" />
        <XMarkIcon v-else class="w-6 h-6" />
      </button>
    </div>

    <nav class="space-y-1">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="flex items-center gap-3 px-3 py-3 rounded hover:bg-blue-600 transition duration-200 text-gray-200 hover:text-white"
        :class="{ 'bg-blue-600 text-white': isActive(item.path) }"
      >
        <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
        <span v-show="isOpen" class="text-sm">{{ item.label }}</span>
      </router-link>
    </nav>

  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { 
  HomeIcon, 
  Bars3Icon, 
  XMarkIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  BellIcon,
  CogIcon
} from '@heroicons/vue/24/outline'

const isOpen = ref(true)
const route = useRoute()

const menuItems = [
  { path: '/home', label: 'Home', icon: HomeIcon },
  { path: '/analytics', label: 'Análise', icon: ChartBarIcon },
  { path: '/loans', label: 'Empréstimos', icon: CurrencyDollarIcon },
  { path: '/clients', label: 'Clientes', icon: UsersIcon },
  { path: '/payments', label: 'Pagamentos', icon: CreditCardIcon },
  { path: '/reports', label: 'Relatórios', icon: DocumentChartBarIcon },
  { path: '/notifications', label: 'Notificações', icon: BellIcon },
  { path: '/settings', label: 'Configurações', icon: CogIcon }
]

function toggleSidebar() {
  isOpen.value = !isOpen.value
}

function isActive(path: string) {
  return route.path.includes(path)
}
</script>
