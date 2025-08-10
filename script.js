let totalIterations = 864; // 48 loops × 18 iterations
                                                let currentIteration = 1;

                                                function setBackground(iterInCycle) {
                                                  let r, g, b, ratio, stepNumber, stepCount, stepMax;

                                                    if (iterInCycle >= 1 && iterInCycle <= 7) {
                                                        // Step 1: Blue → White
                                                            stepNumber = 1;
                                                                stepCount = iterInCycle;
                                                                    stepMax = 7;
                                                                        ratio = (iterInCycle - 1) / (stepMax - 1);
                                                                            r = g = Math.round(0 + ratio * 255);
                                                                                b = 255;
                                                                                  } 
                                                                                    else if (iterInCycle >= 8 && iterInCycle <= 9) {
                                                                                        // Step 2: Static White
                                                                                            stepNumber = 2;
                                                                                                stepCount = iterInCycle - 7;
                                                                                                    stepMax = 2;
                                                                                                        r = g = b = 255;
                                                                                                          } 
                                                                                                            else if (iterInCycle >= 10 && iterInCycle <= 13) {
                                                                                                                // Step 3: White → Blue
                                                                                                                    stepNumber = 3;
                                                                                                                        stepCount = iterInCycle - 9;
                                                                                                                            stepMax = 4;
                                                                                                                                ratio = (iterInCycle - 10) / (stepMax - 1);
                                                                                                                                    r = g = Math.round(255 - ratio * 255);
                                                                                                                                        b = 255;
                                                                                                                                          } 
                                                                                                                                            else {
                                                                                                                                                // Step 4: Static Blue
                                                                                                                                                    stepNumber = 4;
                                                                                                                                                        stepCount = iterInCycle - 13;
                                                                                                                                                            stepMax = 5;
                                                                                                                                                                r = g = 0;
                                                                                                                                                                    b = 255;
                                                                                                                                                                      }

                                                                                                                                                                        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
                                                                                                                                                                          document.getElementById("step").textContent = `Step ${stepNumber} (${stepCount}/${stepMax})`;
                                                                                                                                                                          }

                                                                                                                                                                          function updateIteration() {
                                                                                                                                                                            document.getElementById("iteration").textContent = `Iteration: ${currentIteration}`;

                                                                                                                                                                              let iterInCycle = ((currentIteration - 1) % 18) + 1;
                                                                                                                                                                                setBackground(iterInCycle);

                                                                                                                                                                                  if (currentIteration < totalIterations) {
                                                                                                                                                                                      currentIteration++;
                                                                                                                                                                                          setTimeout(updateIteration, 5000); // 5 seconds per iteration
                                                                                                                                                                                            }
                                                                                                                                                                                            }

                                                                                                                                                                                            updateIteration();
