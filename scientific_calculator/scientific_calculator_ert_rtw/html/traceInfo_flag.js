function TraceInfoFlag() {
    this.traceFlag = new Array();
    this.traceFlag["scientific_calculator.c:41c62"]=1;
    this.traceFlag["scientific_calculator.c:49c62"]=1;
    this.traceFlag["scientific_calculator.c:57c62"]=1;
    this.traceFlag["scientific_calculator.c:65c62"]=1;
}
top.TraceInfoFlag.instance = new TraceInfoFlag();
function TraceInfoLineFlag() {
    this.lineTraceFlag = new Array();
    this.lineTraceFlag["scientific_calculator.c:41"]=1;
    this.lineTraceFlag["scientific_calculator.c:42"]=1;
    this.lineTraceFlag["scientific_calculator.c:49"]=1;
    this.lineTraceFlag["scientific_calculator.c:50"]=1;
    this.lineTraceFlag["scientific_calculator.c:57"]=1;
    this.lineTraceFlag["scientific_calculator.c:58"]=1;
    this.lineTraceFlag["scientific_calculator.c:65"]=1;
    this.lineTraceFlag["scientific_calculator.c:66"]=1;
}
top.TraceInfoLineFlag.instance = new TraceInfoLineFlag();
