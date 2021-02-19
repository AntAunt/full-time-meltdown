gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDBluePlayerObjects1= [];
gdjs.New_32scene2Code.GDBluePlayerObjects2= [];
gdjs.New_32scene2Code.GDMediumBrownMeteor3Objects1= [];
gdjs.New_32scene2Code.GDMediumBrownMeteor3Objects2= [];
gdjs.New_32scene2Code.GDFlyingEnemyObjects1= [];
gdjs.New_32scene2Code.GDFlyingEnemyObjects2= [];
gdjs.New_32scene2Code.GDBlueCrystal2Objects1= [];
gdjs.New_32scene2Code.GDBlueCrystal2Objects2= [];
gdjs.New_32scene2Code.GDSmallBluePlatformObjects1= [];
gdjs.New_32scene2Code.GDSmallBluePlatformObjects2= [];
gdjs.New_32scene2Code.GDRedFloorObjects1= [];
gdjs.New_32scene2Code.GDRedFloorObjects2= [];
gdjs.New_32scene2Code.GDGreenFlagObjects1= [];
gdjs.New_32scene2Code.GDGreenFlagObjects2= [];
gdjs.New_32scene2Code.GDLivesObjects1= [];
gdjs.New_32scene2Code.GDLivesObjects2= [];
gdjs.New_32scene2Code.GDTimerObjects1= [];
gdjs.New_32scene2Code.GDTimerObjects2= [];
gdjs.New_32scene2Code.GDPointsObjects1= [];
gdjs.New_32scene2Code.GDPointsObjects2= [];
gdjs.New_32scene2Code.GDSpeedObjects1= [];
gdjs.New_32scene2Code.GDSpeedObjects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.New_32scene2Code.GDBluePlayerObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBlueCrystal2Objects1Objects = Hashtable.newFrom({"BlueCrystal2": gdjs.New_32scene2Code.GDBlueCrystal2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.New_32scene2Code.GDBluePlayerObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDGreenFlagObjects1Objects = Hashtable.newFrom({"GreenFlag": gdjs.New_32scene2Code.GDGreenFlagObjects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

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


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.New_32scene2Code.GDLivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.New_32scene2Code.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.New_32scene2Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDLivesObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDLivesObjects1[i].setString(gdjs.New_32scene2Code.GDLivesObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Life"))))));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDTimerObjects1[i].setString(gdjs.New_32scene2Code.GDTimerObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))))));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDPointsObjects1[i].setString(gdjs.New_32scene2Code.GDPointsObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Point"))))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PointTracker");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.New_32scene2Code.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.New_32scene2Code.GDSpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.New_32scene2Code.GDTimerObjects1);
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.New_32scene2Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) / 100))));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDPointsObjects1[i].setString("Points: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) / 100)));
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.00005);
}{runtimeScene.getVariables().getFromIndex(2).sub(1);
}{for(var i = 0, len = gdjs.New_32scene2Code.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDSpeedObjects1[i].setString("Speed: " + gdjs.evtTools.common.toString(1 + gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.005) / 100));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.New_32scene2Code.GDBlueCrystal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.New_32scene2Code.GDBluePlayerObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBluePlayerObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBlueCrystal2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.New_32scene2Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) != 1 ) {
        gdjs.New_32scene2Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDBluePlayerObjects1[k] = gdjs.New_32scene2Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDBluePlayerObjects1.length = k;}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDBlueCrystal2Objects1 */
/* Reuse gdjs.New_32scene2Code.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBluePlayerObjects1[i].returnVariable(gdjs.New_32scene2Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBlueCrystal2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.New_32scene2Code.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.New_32scene2Code.GDGreenFlagObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBluePlayerObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDGreenFlagObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.New_32scene2Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.New_32scene2Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDBluePlayerObjects1[k] = gdjs.New_32scene2Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDBluePlayerObjects1.length = k;}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.New_32scene2Code.GDBlueCrystal2Objects1);
/* Reuse gdjs.New_32scene2Code.GDBluePlayerObjects1 */
{runtimeScene.getVariables().getFromIndex(1).add(500);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1000);
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBlueCrystal2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBluePlayerObjects1[i].returnVariable(gdjs.New_32scene2Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

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
gdjs.New_32scene2Code.GDBlueCrystal2Objects1.length = 0;
gdjs.New_32scene2Code.GDBlueCrystal2Objects2.length = 0;
gdjs.New_32scene2Code.GDSmallBluePlatformObjects1.length = 0;
gdjs.New_32scene2Code.GDSmallBluePlatformObjects2.length = 0;
gdjs.New_32scene2Code.GDRedFloorObjects1.length = 0;
gdjs.New_32scene2Code.GDRedFloorObjects2.length = 0;
gdjs.New_32scene2Code.GDGreenFlagObjects1.length = 0;
gdjs.New_32scene2Code.GDGreenFlagObjects2.length = 0;
gdjs.New_32scene2Code.GDLivesObjects1.length = 0;
gdjs.New_32scene2Code.GDLivesObjects2.length = 0;
gdjs.New_32scene2Code.GDTimerObjects1.length = 0;
gdjs.New_32scene2Code.GDTimerObjects2.length = 0;
gdjs.New_32scene2Code.GDPointsObjects1.length = 0;
gdjs.New_32scene2Code.GDPointsObjects2.length = 0;
gdjs.New_32scene2Code.GDSpeedObjects1.length = 0;
gdjs.New_32scene2Code.GDSpeedObjects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
