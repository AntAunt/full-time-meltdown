gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDTryAgainObjects1= [];
gdjs.Game_32OverCode.GDTryAgainObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects1.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
