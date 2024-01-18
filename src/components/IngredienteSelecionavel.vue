<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            // para referenciar dados no script usamos o this 
            this.selecionado = !this.selecionado

            if (this.selecionado) {
                // para emitir eventos personalizados = $emit
                this.$emit('adicionarIngrediente', this.ingrediente)

            } else {
                this.$emit('removerIngrediente', this.ingrediente)
            }

        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
    <button
            @:click="aoClicar"
            :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>