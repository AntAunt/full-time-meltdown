gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDBluePlayerObjects1= [];
gdjs.New_32scene2Code.GDBluePlayerObjects2= [];
gdjs.New_32scene2Code.GDMediumBrownMeteor3Objects1= [];
gdjs.New_32scene2Code.GDMediumBrownMeteor3Objects2= [];
gdjs.New_32scene2Code.GDFlyingEnemyObjects1= [];
gdjs.New_32scene2Code.GDFlyingEnemyObjects2= [];
gdjs.New_32scene2Code.GDBlueCrystalObjects1= [];
gdjs.New_32scene2Code.GDBlueCrystalObjects2= [];
gdjs.New_32scene2Code.GDSmallBluePlatformObjects1= [];
gdjs.New_32scene2Code.GDSmallBluePlatformObjects2= [];
gdjs.New_32scene2Code.GDRedFloorObjects1= [];
gdjs.New_32scene2Code.GDRedFloorObjects2= [];
gdjs.New_32scene2Code.GDGreenFlagObjects1= [];
gdjs.New_32scene2Code.GDGreenFlagObjects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
}

}


{


{
}

}


{



}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.New_32scene2Code.GDFlyingEnemyObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDFlyingEnemyObjects1[i].addPolarForce(90, 50, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.New_32scene2Code.GDFlyingEnemyObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDFlyingEnemyObjects1[i].getY() >= 460 ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDFlyingEnemyObjects1[k] = gdjs.New_32scene2Code.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDFlyingEnemyObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDFlyingEnemyObjects1[i].setY(-(10));
}
}}

}


{



}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.New_32scene2Code.GDBluePlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBluePlayerObjects1[i].addForce(300, 0, 0);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.New_32scene2Code.GDBluePlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBluePlayerObjects1[i].addForce(-(300), 0, 0);
}
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDBluePlayerObjects1.length = 0;
gdjs.New_32scene2Code.GDBluePlayerObjects2.length = 0;
gdjs.New_32scene2Code.GDMediumBrownMeteor3Objects1.length = 0;
gdjs.New_32scene2Code.GDMediumBrownMeteor3Objects2.length = 0;
gdjs.New_32scene2Code.GDFlyingEnemyObjects1.length = 0;
gdjs.New_32scene2Code.GDFlyingEnemyObjects2.length = 0;
gdjs.New_32scene2Code.GDBlueCrystalObjects1.length = 0;
gdjs.New_32scene2Code.GDBlueCrystalObjects2.length = 0;
gdjs.New_32scene2Code.GDSmallBluePlatformObjects1.length = 0;
gdjs.New_32scene2Code.GDSmallBluePlatformObjects2.length = 0;
gdjs.New_32scene2Code.GDRedFloorObjects1.length = 0;
gdjs.New_32scene2Code.GDRedFloorObjects2.length = 0;
gdjs.New_32scene2Code.GDGreenFlagObjects1.length = 0;
gdjs.New_32scene2Code.GDGreenFlagObjects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
