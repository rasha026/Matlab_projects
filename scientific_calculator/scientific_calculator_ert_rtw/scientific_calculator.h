/*
 * File: scientific_calculator.h
 *
 * Code generated for Simulink model 'scientific_calculator'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Sat Dec 24 18:29:18 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_scientific_calculator_h_
#define RTW_HEADER_scientific_calculator_h_
#include <string.h>
#include <stddef.h>
#ifndef scientific_calculator_COMMON_INCLUDES_
# define scientific_calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* scientific_calculator_COMMON_INCLUDES_ */

#include "scientific_calculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
  real_T In2;                          /* '<Root>/In2' */
} ExtU_scientific_calculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
  real_T Out4;                         /* '<Root>/Out4' */
} ExtY_scientific_calculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_scientific_calculator_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_scientific_calculator_T scientific_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_scientific_calculator_T scientific_calculator_Y;

/* Model entry point functions */
extern void scientific_calculator_initialize(void);
extern void scientific_calculator_step(void);
extern void scientific_calculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_scientific_calculato_T *const scientific_calculator_M;

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
 * '<Root>' : 'scientific_calculator'
 */
#endif                                 /* RTW_HEADER_scientific_calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
