<template>
  <div>
    <div>
      <input type="text" :value="localObject.field1"/>
      <input type="button" value="clone from store" v-on:click="cloneFromStore" >
      <input type="button" value="mutate object in store" v-on:click="mutateObjectInStore" >
    </div>

    <div>
      object from vuex store {{getObject.field1}}
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  name: 'TestComponent',
  data () {
    return {
      localObject: {
        field1: 0
      }
    }
  },
  computed: {
        ...mapGetters([
            'getObject'
        ])
    },
    methods: {
        ...mapActions([
            'mutateObject'
        ]),
        cloneFromStore: function(){
          this.localObject = JSON.parse(JSON.stringify(this.getObject))
          console.log(this.localObject);
        },
        mutateObjectInStore: function(){
          this.mutateObject(Math.random())
        }
    }
}
</script>
