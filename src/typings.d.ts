/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'screenfull' {
  var enabled: any;
  function toggle(): any
}
