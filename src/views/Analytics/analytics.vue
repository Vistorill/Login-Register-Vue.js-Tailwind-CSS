<template>
  <div class="space-y-6">
    <!-- Título -->
    <div>
      <h1 class="text-3xl font-bold text-white">Análise</h1>
      <p class="text-gray-400">Visualize métricas e análises do seu sistema</p>
    </div>

    <!-- Cards de Estatísticas -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Total de Usuários</p>
        <p class="text-3xl font-bold text-white mt-2">2.543</p>
        <p class="text-green-500 text-xs mt-2">↑ 12% em relação ao mês anterior</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Empréstimos Ativos</p>
        <p class="text-3xl font-bold text-white mt-2">428</p>
        <p class="text-green-500 text-xs mt-2">↑ 8% em relação ao mês anterior</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Pagamentos Processados</p>
        <p class="text-3xl font-bold text-white mt-2">R$ 245.890</p>
        <p class="text-green-500 text-xs mt-2">↑ 24% em relação ao mês anterior</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Taxa de Aprovação</p>
        <p class="text-3xl font-bold text-white mt-2">87.5%</p>
        <p class="text-green-500 text-xs mt-2">↑ 3.2% em relação ao mês anterior</p>
      </div>
    </div>

    <!-- Gráficos -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-white mb-4">Empréstimos por Mês</h3>
        <div class="h-64 flex items-end justify-around gap-2">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-500 rounded" style="height: 120px;"></div>
            <span class="text-xs text-gray-400">Jan</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-600 rounded" style="height: 180px;"></div>
            <span class="text-xs text-gray-400">Fev</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-500 rounded" style="height: 140px;"></div>
            <span class="text-xs text-gray-400">Mar</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-600 rounded" style="height: 200px;"></div>
            <span class="text-xs text-gray-400">Abr</span>
          </div>
        </div>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-white mb-4">Distribuição por Categoria</h3>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between mb-2">
              <span class="text-sm text-gray-300">Pessoa Física</span>
              <span class="text-sm font-semibold text-white">65%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 65%;"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-2">
              <span class="text-sm text-gray-300">Pessoa Jurídica</span>
              <span class="text-sm font-semibold text-white">25%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div class="bg-green-500 h-2 rounded-full" style="width: 25%;"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-2">
              <span class="text-sm text-gray-300">MEI</span>
              <span class="text-sm font-semibold text-white">10%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div class="bg-purple-500 h-2 rounded-full" style="width: 10%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
