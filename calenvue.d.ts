import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Calenvue: { install: InstallFunction };
export default Calenvue;

export const CalenvueSample: VueConstructor<Vue>;
