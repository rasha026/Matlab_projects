function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["untitled:24"] = "msg=rtwMsg_reducedBlock&block=untitled:24";
	/* <Root>/Constant1 */
	this.urlHashMap["untitled:26"] = "msg=rtwMsg_reducedBlock&block=untitled:26";
	/* <Root>/Display */
	this.urlHashMap["untitled:25"] = "msg=rtwMsg_reducedBlock&block=untitled:25";
	/* <Root>/Display1 */
	this.urlHashMap["untitled:27"] = "msg=rtwMsg_reducedBlock&block=untitled:27";
	/* <Root>/Display2 */
	this.urlHashMap["untitled:28"] = "msg=rtwMsg_reducedBlock&block=untitled:28";
	/* <Root>/Display3 */
	this.urlHashMap["untitled:29"] = "msg=rtwMsg_reducedBlock&block=untitled:29";
	/* <S1>/Add */
	this.urlHashMap["untitled:6"] = "msg=rtwMsg_reducedBlock&block=untitled:6";
	/* <S1>/Divide */
	this.urlHashMap["untitled:7"] = "msg=rtwMsg_reducedBlock&block=untitled:7";
	/* <S1>/Product */
	this.urlHashMap["untitled:8"] = "msg=rtwMsg_reducedBlock&block=untitled:8";
	/* <S1>/Subtract */
	this.urlHashMap["untitled:9"] = "msg=rtwMsg_reducedBlock&block=untitled:9";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled"};
	this.sidHashMap["untitled"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "untitled:21"};
	this.sidHashMap["untitled:21"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Calculator"] = {sid: "untitled:21"};
	this.sidHashMap["untitled:21"] = {rtwname: "<Root>/Calculator"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "untitled:24"};
	this.sidHashMap["untitled:24"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "untitled:26"};
	this.sidHashMap["untitled:26"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "untitled:25"};
	this.sidHashMap["untitled:25"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/Display1"] = {sid: "untitled:27"};
	this.sidHashMap["untitled:27"] = {rtwname: "<Root>/Display1"};
	this.rtwnameHashMap["<Root>/Display2"] = {sid: "untitled:28"};
	this.sidHashMap["untitled:28"] = {rtwname: "<Root>/Display2"};
	this.rtwnameHashMap["<Root>/Display3"] = {sid: "untitled:29"};
	this.sidHashMap["untitled:29"] = {rtwname: "<Root>/Display3"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "untitled:22"};
	this.sidHashMap["untitled:22"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "untitled:4"};
	this.sidHashMap["untitled:4"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "untitled:6"};
	this.sidHashMap["untitled:6"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "untitled:7"};
	this.sidHashMap["untitled:7"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "untitled:8"};
	this.sidHashMap["untitled:8"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "untitled:9"};
	this.sidHashMap["untitled:9"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "untitled:23"};
	this.sidHashMap["untitled:23"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "untitled:10"};
	this.sidHashMap["untitled:10"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "untitled:11"};
	this.sidHashMap["untitled:11"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "untitled:12"};
	this.sidHashMap["untitled:12"] = {rtwname: "<S1>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
