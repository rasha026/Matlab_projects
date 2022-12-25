/*
 * File: programming_calculator.c
 *
 * Code generated for Simulink model 'programming_calculator'.
 *
 * Model version                  : 1.4
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Sun Dec 25 10:18:54 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "programming_calculator.h"
#include "programming_calculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_programming_calculator_T programming_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_programming_calculator_T programming_calculator_Y;

/* Real-time model */
RT_MODEL_programming_calculat_T programming_calculator_M_;
RT_MODEL_programming_calculat_T *const programming_calculator_M =
  &programming_calculator_M_;

/* Model step function */
void programming_calculator_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Logic: '<Root>/Logical Operator'
   */
  programming_calculator_Y.Out1 = (programming_calculator_U.In1 &&
    programming_calculator_U.In2);

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Logic: '<Root>/Logical Operator1'
   */
  programming_calculator_Y.Out2 = (programming_calculator_U.In1 ||
    programming_calculator_U.In2);

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Logic: '<Root>/Logical Operator2'
   */
  programming_calculator_Y.Out3 = programming_calculator_U.In1 ^
    programming_calculator_U.In2;

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   */
  programming_calculator_Y.Out4 = (programming_calculator_U.In1 ==
    programming_calculator_U.In2);

  /* Outport: '<Root>/Out5' incorporates:
   *  Inport: '<Root>/In1'
   *  Logic: '<Root>/Logical Operator4'
   */
  programming_calculator_Y.Out5 = !programming_calculator_U.In1;

  /* Outport: '<Root>/Out6' incorporates:
   *  Inport: '<Root>/In2'
   *  Logic: '<Root>/Logical Operator5'
   */
  programming_calculator_Y.Out6 = !programming_calculator_U.In2;
}

/* Model initialize function */
void programming_calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(programming_calculator_M, (NULL));

  /* external inputs */
  (void)memset((void *)&programming_calculator_U, 0, sizeof
               (ExtU_programming_calculator_T));

  /* external outputs */
  (void) memset((void *)&programming_calculator_Y, 0,
                sizeof(ExtY_programming_calculator_T));
}

/* Model terminate function */
void programming_calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
