<script lang="ts">
import type IReceita from '@/interfaces/IReceitas';
import type { PropType } from 'vue';

export default {
  props: {
    receita: { type: Object as PropType<IReceita>, required: true }
  }
}
</script>

<template>
  <article class="receita">
    <header class="receita__cabecalho">
      <img class="receita__imagem" :src="`/imagens/receitas/${receita.imagem}`" :alt="`Foto de ${receita.nome}`">
    </header>

    <section class="receita__corpo">
      <h2 class="paragrafo receita__nome">
        {{ receita.nome }}
      </h2>
    </section>
  </article>
</template>

<style scoped>
.receita {
  display: flex;
  width: 17.625rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;
  background: var(--Branco, #FFF);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita__corpo {
  padding: 2rem 1rem;
}

.receita__imagem {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}

.receita__nome {
  font-weight: 700;
  color: var(--cinza, #444);
}
</style>



<!-- <script lang="ts">
import type IReceita from '@/inrterfaces/IReceitas';
import type { PropType } from 'vue';

export default {
    props: {
        receitas: { type: Object as PropType<IReceita>, required: true }
    }
}
</script>

<template>
    <article class="receita">
        <header class="receita-cabecalho">
            <img :src="`/imagens/receitas/${receitas.imagem}`" alt="Imagem da Receita" class="receita-imagem">
        </header>

        <div class="receita-nome">
            <p>
                {{ receitas.nome }}
            </p>
        </div>
    </article>
</template>

<style scoped>
.receita {
    max-width: 19.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background  : var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* .receita-cabecalho {
    width: 100%;
} */

.receita-imagem{
    width: 100%;
}

.receita-nome {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
</style> -->
