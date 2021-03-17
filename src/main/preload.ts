import {  contextBridge } from 'electron';
export class Test{
    test = ()=>{console.log("hello! world")}
}
contextBridge.exposeInMainWorld(
    'api',
    new Test()
);
