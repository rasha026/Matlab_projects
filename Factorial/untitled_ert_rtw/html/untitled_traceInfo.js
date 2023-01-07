function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["untitled:7"] = "untitled.c:40";
	/* <Root>/Constant1 */
	this.urlHashMap["untitled:8"] = "untitled.c:50,65";
	/* <Root>/Display */
	this.urlHashMap["untitled:9"] = "msg=rtwMsg_reducedBlock&block=untitled:9";
	/* <Root>/While Iterator
Subsystem */
	this.urlHashMap["untitled:2"] = "untitled.c:35,71";
	/* <S1>/Constant */
	this.urlHashMap["untitled:48"] = "untitled.c:60";
	/* <S1>/Product */
	this.urlHashMap["untitled:15"] = "msg=rtwMsg_reducedBlock&block=untitled:15";
	/* <S1>/Subtract */
	this.urlHashMap["untitled:39"] = "untitled.c:51";
	/* <S1>/Unit Delay */
	this.urlHashMap["untitled:13"] = "msg=rtwMsg_reducedBlock&block=untitled:13";
	/* <S1>/Unit Delay1 */
	this.urlHashMap["untitled:45"] = "untitled.c:45,49,52&untitled.h:41";
	/* <S1>/Unit Delay2 */
	this.urlHashMap["untitled:46"] = "untitled.c:53,59&untitled.h:42";
	/* <S1>/Unit Delay3 */
	this.urlHashMap["untitled:47"] = "untitled.c:54,64&untitled.h:43";
	/* <S1>/While Iterator */
	this.urlHashMap["untitled:5"] = "untitled.c:36";
	/* <S2>/Compare */
	this.urlHashMap["untitled:10:2"] = "untitled.c:43";
	/* <S2>/Constant */
	this.urlHashMap["untitled:10:3"] = "untitled.c:44";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled"};
	this.sidHashMap["untitled"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "untitled:2"};
	this.sidHashMap["untitled:2"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "untitled:10"};
	this.sidHashMap["untitled:10"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "untitled:7"};
	this.sidHashMap["untitled:7"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "untitled:8"};
	this.sidHashMap["untitled:8"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "untitled:9"};
	this.sidHashMap["untitled:9"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/While Iterator Subsystem"] = {sid: "untitled:2"};
	this.sidHashMap["untitled:2"] = {rtwname: "<Root>/While Iterator Subsystem"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "untitled:3"};
	this.sidHashMap["untitled:3"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/IC"] = {sid: "untitled:4"};
	this.sidHashMap["untitled:4"] = {rtwname: "<S1>/IC"};
	this.rtwnameHashMap["<S1>/Compare To Zero"] = {sid: "untitled:10"};
	this.sidHashMap["untitled:10"] = {rtwname: "<S1>/Compare To Zero"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "untitled:48"};
	this.sidHashMap["untitled:48"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "untitled:15"};
	this.sidHashMap["untitled:15"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "untitled:39"};
	this.sidHashMap["untitled:39"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "untitled:13"};
	this.sidHashMap["untitled:13"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Unit Delay1"] = {sid: "untitled:45"};
	this.sidHashMap["untitled:45"] = {rtwname: "<S1>/Unit Delay1"};
	this.rtwnameHashMap["<S1>/Unit Delay2"] = {sid: "untitled:46"};
	this.sidHashMap["untitled:46"] = {rtwname: "<S1>/Unit Delay2"};
	this.rtwnameHashMap["<S1>/Unit Delay3"] = {sid: "untitled:47"};
	this.sidHashMap["untitled:47"] = {rtwname: "<S1>/Unit Delay3"};
	this.rtwnameHashMap["<S1>/While Iterator"] = {sid: "untitled:5"};
	this.sidHashMap["untitled:5"] = {rtwname: "<S1>/While Iterator"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "untitled:6"};
	this.sidHashMap["untitled:6"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/u"] = {sid: "untitled:10:1"};
	this.sidHashMap["untitled:10:1"] = {rtwname: "<S2>/u"};
	this.rtwnameHashMap["<S2>/Compare"] = {sid: "untitled:10:2"};
	this.sidHashMap["untitled:10:2"] = {rtwname: "<S2>/Compare"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "untitled:10:3"};
	this.sidHashMap["untitled:10:3"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/y"] = {sid: "untitled:10:5"};
	this.sidHashMap["untitled:10:5"] = {rtwname: "<S2>/y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
