/*
 * File: Calculator_subSys.h
 *
 * Code generated for Simulink model 'Calculator_subSys'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Sat Jan 07 18:54:55 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_Calculator_subSys_h_
#define RTW_HEADER_Calculator_subSys_h_
#include <stddef.h>
#ifndef Calculator_subSys_COMMON_INCLUDES_
# define Calculator_subSys_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Calculator_subSys_COMMON_INCLUDES_ */

#include "Calculator_subSys_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Real-time Model Data Structure */
struct tag_RTM_Calculator_subSys_T {
  const char_T * volatile errorStatus;
};

/* Model entry point functions */
extern void Calculator_subSys_initialize(void);
extern void Calculator_subSys_step(void);
extern void Calculator_subSys_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Calculator_subSys_T *const Calculator_subSys_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<S1>/Add' : Unused code path elimination
 * Block '<S1>/Divide' : Unused code path elimination
 * Block '<S1>/Product' : Unused code path elimination
 * Block '<S1>/Subtract' : Unused code path elimination
 * Block '<Root>/Constant' : Unused code path elimination
 * Block '<Root>/Constant1' : Unused code path elimination
 * Block '<Root>/Display' : Unused code path elimination
 * Block '<Root>/Display1' : Unused code path elimination
 * Block '<Root>/Display2' : Unused code path elimination
 * Block '<Root>/Display3' : Unused code path elimination
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'Calculator_subSys'
 * '<S1>'   : 'Calculator_subSys/Calculator'
 */
#endif                                 /* RTW_HEADER_Calculator_subSys_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
