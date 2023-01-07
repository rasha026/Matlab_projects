function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["Calculator_subSys:24"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:24";
	/* <Root>/Constant1 */
	this.urlHashMap["Calculator_subSys:26"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:26";
	/* <Root>/Display */
	this.urlHashMap["Calculator_subSys:25"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:25";
	/* <Root>/Display1 */
	this.urlHashMap["Calculator_subSys:27"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:27";
	/* <Root>/Display2 */
	this.urlHashMap["Calculator_subSys:28"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:28";
	/* <Root>/Display3 */
	this.urlHashMap["Calculator_subSys:29"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:29";
	/* <S1>/Add */
	this.urlHashMap["Calculator_subSys:6"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:6";
	/* <S1>/Divide */
	this.urlHashMap["Calculator_subSys:7"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:7";
	/* <S1>/Product */
	this.urlHashMap["Calculator_subSys:8"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:8";
	/* <S1>/Subtract */
	this.urlHashMap["Calculator_subSys:9"] = "msg=rtwMsg_reducedBlock&block=Calculator_subSys:9";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Calculator_subSys"};
	this.sidHashMap["Calculator_subSys"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Calculator_subSys:21"};
	this.sidHashMap["Calculator_subSys:21"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Calculator"] = {sid: "Calculator_subSys:21"};
	this.sidHashMap["Calculator_subSys:21"] = {rtwname: "<Root>/Calculator"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "Calculator_subSys:24"};
	this.sidHashMap["Calculator_subSys:24"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "Calculator_subSys:26"};
	this.sidHashMap["Calculator_subSys:26"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "Calculator_subSys:25"};
	this.sidHashMap["Calculator_subSys:25"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/Display1"] = {sid: "Calculator_subSys:27"};
	this.sidHashMap["Calculator_subSys:27"] = {rtwname: "<Root>/Display1"};
	this.rtwnameHashMap["<Root>/Display2"] = {sid: "Calculator_subSys:28"};
	this.sidHashMap["Calculator_subSys:28"] = {rtwname: "<Root>/Display2"};
	this.rtwnameHashMap["<Root>/Display3"] = {sid: "Calculator_subSys:29"};
	this.sidHashMap["Calculator_subSys:29"] = {rtwname: "<Root>/Display3"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Calculator_subSys:22"};
	this.sidHashMap["Calculator_subSys:22"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "Calculator_subSys:4"};
	this.sidHashMap["Calculator_subSys:4"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "Calculator_subSys:6"};
	this.sidHashMap["Calculator_subSys:6"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "Calculator_subSys:7"};
	this.sidHashMap["Calculator_subSys:7"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "Calculator_subSys:8"};
	this.sidHashMap["Calculator_subSys:8"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "Calculator_subSys:9"};
	this.sidHashMap["Calculator_subSys:9"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Calculator_subSys:23"};
	this.sidHashMap["Calculator_subSys:23"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "Calculator_subSys:10"};
	this.sidHashMap["Calculator_subSys:10"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "Calculator_subSys:11"};
	this.sidHashMap["Calculator_subSys:11"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "Calculator_subSys:12"};
	this.sidHashMap["Calculator_subSys:12"] = {rtwname: "<S1>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
