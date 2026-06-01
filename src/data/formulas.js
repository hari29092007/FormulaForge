const formulas = [
  {
    "id": 1,
    "name": "Slope of a Line",
    "formula": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
    "description": "Slope between two points on a line.",
    "units": "Δy / Δx (ratio of output to input units)",
    "subject": "Mathematics",
    "keywords": [
      "slope",
      "line",
      "geometry"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "m",
        "name": "Slope",
        "unit": "unitless"
      },
      {
        "symbol": "y₂",
        "name": "Y-coordinate of second point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "y₁",
        "name": "Y-coordinate of first point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "x₂",
        "name": "X-coordinate of second point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "x₁",
        "name": "X-coordinate of first point",
        "unit": "units of coordinate system"
      }
    ]
  },
  {
    "id": 2,
    "name": "Quadratic Formula",
    "formula": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    "description": "Solutions for quadratic polynomial equations.",
    "units": "units of x (same as variable solved)",
    "subject": "Mathematics",
    "keywords": [
      "quadratic",
      "roots",
      "algebra"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "x",
        "name": "Solution",
        "unit": "depends on equation"
      },
      {
        "symbol": "b",
        "name": "Linear coefficient",
        "unit": "depends on equation"
      },
      {
        "symbol": "a",
        "name": "Quadratic coefficient",
        "unit": "depends on equation"
      },
      {
        "symbol": "c",
        "name": "Constant term",
        "unit": "depends on equation"
      }
    ]
  },
  {
    "id": 3,
    "name": "Distance Formula",
    "formula": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
    "description": "Distance between two points in the plane.",
    "units": "length (same units as coordinates)",
    "subject": "Mathematics",
    "keywords": [
      "distance",
      "geometry",
      "coordinate geometry"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "d",
        "name": "Distance",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "x₂",
        "name": "X-coordinate of second point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "x₁",
        "name": "X-coordinate of first point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "y₂",
        "name": "Y-coordinate of second point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "y₁",
        "name": "Y-coordinate of first point",
        "unit": "units of coordinate system"
      }
    ]
  },
  {
    "id": 4,
    "name": "Midpoint Formula",
    "formula": "M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)",
    "description": "Midpoint of a segment between two points.",
    "units": "coordinates (same units as inputs)",
    "subject": "Mathematics",
    "keywords": [
      "midpoint",
      "coordinate geometry",
      "algebra"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "M",
        "name": "Midpoint",
        "unit": "coordinate pair"
      },
      {
        "symbol": "x₁",
        "name": "X-coordinate of first point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "x₂",
        "name": "X-coordinate of second point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "y₁",
        "name": "Y-coordinate of first point",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "y₂",
        "name": "Y-coordinate of second point",
        "unit": "units of coordinate system"
      }
    ]
  },
  {
    "id": 5,
    "name": "Circle Equation",
    "formula": "(x - h)^2 + (y - k)^2 = r^2",
    "description": "Equation of a circle centered at (h,k).",
    "units": "length^2 (r^2) — consistent with coordinate units",
    "subject": "Mathematics",
    "keywords": [
      "circle",
      "geometry",
      "conic"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "x",
        "name": "X-coordinate",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "h",
        "name": "X-coordinate of center",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "y",
        "name": "Y-coordinate",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "k",
        "name": "Y-coordinate of center",
        "unit": "units of coordinate system"
      },
      {
        "symbol": "r",
        "name": "Radius",
        "unit": "units of coordinate system"
      }
    ]
  },
  {
    "id": 6,
    "name": "Binomial Theorem",
    "formula": "(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k",
    "description": "Expansion formula for binomial expressions.",
    "units": "depends on x and y (symbolic expansion)",
    "subject": "Mathematics",
    "keywords": [
      "binomial",
      "combinatorics",
      "algebra"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "x",
        "name": "First term",
        "unit": "unitless"
      },
      {
        "symbol": "y",
        "name": "Second term",
        "unit": "unitless"
      },
      {
        "symbol": "n",
        "name": "Exponent",
        "unit": "unitless"
      },
      {
        "symbol": "k",
        "name": "Index",
        "unit": "unitless"
      },
      {
        "symbol": "C(n,k)",
        "name": "Binomial coefficient",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 7,
    "name": "Arithmetic Series",
    "formula": "S_n = \\frac{n}{2}(a_1 + a_n)",
    "description": "Sum of the first n terms of an arithmetic sequence.",
    "units": "same units as sequence terms",
    "subject": "Mathematics",
    "keywords": [
      "series",
      "algebra",
      "arithmetic"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "Sₙ",
        "name": "Sum of arithmetic series",
        "unit": "unitless"
      },
      {
        "symbol": "n",
        "name": "Number of terms",
        "unit": "unitless"
      },
      {
        "symbol": "a₁",
        "name": "First term",
        "unit": "unitless"
      },
      {
        "symbol": "aₙ",
        "name": "Last term",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 8,
    "name": "Geometric Series",
    "formula": "S_n = a_1 \\frac{1 - r^n}{1 - r}",
    "description": "Sum of n terms of a geometric series.",
    "units": "same units as sequence terms",
    "subject": "Mathematics",
    "keywords": [
      "series",
      "algebra",
      "geometric"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "Sₙ",
        "name": "Sum of geometric series",
        "unit": "unitless"
      },
      {
        "symbol": "a₁",
        "name": "First term",
        "unit": "unitless"
      },
      {
        "symbol": "r",
        "name": "Common ratio",
        "unit": "unitless"
      },
      {
        "symbol": "n",
        "name": "Number of terms",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 9,
    "name": "Derivative Definition",
    "formula": "f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}",
    "description": "Limit definition of the derivative.",
    "units": "units of f divided by units of x (Δf / Δx)",
    "subject": "Mathematics",
    "keywords": [
      "derivative",
      "calculus",
      "limit"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "f'(x)",
        "name": "Derivative of f at x",
        "unit": "units of f per units of x"
      },
      {
        "symbol": "f(x+h)",
        "name": "Function value at x+h",
        "unit": "depends on function"
      },
      {
        "symbol": "f(x)",
        "name": "Function value at x",
        "unit": "depends on function"
      },
      {
        "symbol": "h",
        "name": "Change in x",
        "unit": "same units as x"
      },
      {
        "symbol": "x",
        "name": "Independent variable",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 10,
    "name": "Power Rule",
    "formula": "\\frac{d}{dx} x^n = n x^{n-1}",
    "description": "Derivative of a power function.",
    "units": "units of f divided by units of x",
    "subject": "Mathematics",
    "keywords": [
      "derivative",
      "calculus",
      "power rule"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "x",
        "name": "Variable",
        "unit": "unitless"
      },
      {
        "symbol": "n",
        "name": "Exponent",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 11,
    "name": "Chain Rule",
    "formula": "\\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x)",
    "description": "Derivative of a composite function.",
    "units": "units of outer function divided by units of inner variable",
    "subject": "Mathematics",
    "keywords": [
      "derivative",
      "calculus",
      "chain rule"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "f'(g(x))",
        "name": "Derivative of f with respect to g(x)",
        "unit": "depends on functions"
      },
      {
        "symbol": "g'(x)",
        "name": "Derivative of g with respect to x",
        "unit": "depends on functions"
      },
      {
        "symbol": "x",
        "name": "Independent variable",
        "unit": "unitless"
      },
      {
        "symbol": "f",
        "name": "Outer function",
        "unit": "depends on function"
      },
      {
        "symbol": "g",
        "name": "Inner function",
        "unit": "depends on function"
      }
    ]
  },
  {
    "id": 12,
    "name": "Integral Definition",
    "formula": "\\int_a^b f(x) \\mathrm{d}x",
    "description": "Definite integral of f from a to b.",
    "units": "units of f × units of x (e.g., f(x)·dx)",
    "subject": "Mathematics",
    "keywords": [
      "integral",
      "calculus",
      "area"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "f(x)",
        "name": "Function",
        "unit": "depends on function"
      },
      {
        "symbol": "x",
        "name": "Integration variable",
        "unit": "unitless"
      },
      {
        "symbol": "a",
        "name": "Lower limit of integration",
        "unit": "unitless"
      },
      {
        "symbol": "b",
        "name": "Upper limit of integration",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 13,
    "name": "Fundamental Theorem of Calculus",
    "formula": "\\frac{d}{dx} \\int_a^x f(t) \\mathrm{d}t = f(x)",
    "description": "Differentiation of an integral function.",
    "units": "units of f (same as integrand)",
    "subject": "Mathematics",
    "keywords": [
      "calculus",
      "fundamental theorem",
      "integral"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "f(t)",
        "name": "Function",
        "unit": "depends on function"
      },
      {
        "symbol": "t",
        "name": "Integration variable",
        "unit": "unitless"
      },
      {
        "symbol": "x",
        "name": "Upper limit and variable",
        "unit": "unitless"
      },
      {
        "symbol": "a",
        "name": "Lower limit",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 14,
    "name": "Taylor Series",
    "formula": "f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!} (x-a)^n",
    "description": "Power series expansion of a function about x = a.",
    "units": "same units as f(x) (series represents the function)",
    "subject": "Mathematics",
    "keywords": [
      "series",
      "calculus",
      "Taylor"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "f(x)",
        "name": "Function",
        "unit": "depends on function"
      },
      {
        "symbol": "f^(n)(a)",
        "name": "nth derivative of f at a",
        "unit": "depends on function"
      },
      {
        "symbol": "a",
        "name": "Center of expansion",
        "unit": "unitless"
      },
      {
        "symbol": "x",
        "name": "Variable",
        "unit": "unitless"
      },
      {
        "symbol": "n",
        "name": "Index/order",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 15,
    "name": "L'Hopital's Rule",
    "formula": "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}",
    "description": "Evaluate indeterminate limits using derivatives.",
    "units": "depends on f and g (same units as the original ratio)",
    "subject": "Mathematics",
    "keywords": [
      "limits",
      "calculus",
      "derivatives"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "f(x)",
        "name": "Numerator function",
        "unit": "depends on function"
      },
      {
        "symbol": "g(x)",
        "name": "Denominator function",
        "unit": "depends on function"
      },
      {
        "symbol": "f'(x)",
        "name": "Derivative of f",
        "unit": "depends on function"
      },
      {
        "symbol": "g'(x)",
        "name": "Derivative of g",
        "unit": "depends on function"
      },
      {
        "symbol": "x",
        "name": "Variable",
        "unit": "unitless"
      },
      {
        "symbol": "a",
        "name": "Limit point",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 16,
    "name": "Newton's Second Law",
    "formula": "\\mathbf{F} = m \\mathbf{a}",
    "description": "Force equals mass times acceleration.",
    "units": "N",
    "subject": "Physics",
    "keywords": [
      "mechanics",
      "force",
      "motion"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "F",
        "name": "Force",
        "unit": "Newtons (N)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "a",
        "name": "Acceleration",
        "unit": "meters per second squared (m/s²)"
      }
    ]
  },
  {
    "id": 17,
    "name": "Kinematic Equation",
    "formula": "v = v_0 + a t",
    "description": "Final velocity under constant acceleration.",
    "units": "m/s",
    "subject": "Physics",
    "keywords": [
      "kinematics",
      "motion",
      "mechanics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "v",
        "name": "Final velocity",
        "unit": "meters per second (m/s)"
      },
      {
        "symbol": "v₀",
        "name": "Initial velocity",
        "unit": "meters per second (m/s)"
      },
      {
        "symbol": "a",
        "name": "Acceleration",
        "unit": "meters per second squared (m/s²)"
      },
      {
        "symbol": "t",
        "name": "Time",
        "unit": "seconds (s)"
      }
    ]
  },
  {
    "id": 18,
    "name": "Displacement",
    "formula": "x = x_0 + v_0 t + \\frac{1}{2} a t^2",
    "description": "Position after constant acceleration.",
    "units": "m",
    "subject": "Physics",
    "keywords": [
      "kinematics",
      "motion",
      "mechanics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "x",
        "name": "Final position",
        "unit": "meters (m)"
      },
      {
        "symbol": "x₀",
        "name": "Initial position",
        "unit": "meters (m)"
      },
      {
        "symbol": "v₀",
        "name": "Initial velocity",
        "unit": "meters per second (m/s)"
      },
      {
        "symbol": "t",
        "name": "Time",
        "unit": "seconds (s)"
      },
      {
        "symbol": "a",
        "name": "Acceleration",
        "unit": "meters per second squared (m/s²)"
      }
    ]
  },
  {
    "id": 19,
    "name": "Work",
    "formula": "W = F d \\cos\\theta",
    "description": "Work done by a force over a displacement.",
    "units": "J",
    "subject": "Physics",
    "keywords": [
      "work",
      "energy",
      "mechanics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "W",
        "name": "Work",
        "unit": "Joules (J)"
      },
      {
        "symbol": "F",
        "name": "Force",
        "unit": "Newtons (N)"
      },
      {
        "symbol": "d",
        "name": "Displacement",
        "unit": "meters (m)"
      },
      {
        "symbol": "θ",
        "name": "Angle between force and displacement",
        "unit": "radians"
      }
    ]
  },
  {
    "id": 20,
    "name": "Kinetic Energy",
    "formula": "K = \\frac{1}{2} m v^2",
    "description": "Energy of motion for a mass.",
    "units": "J",
    "subject": "Physics",
    "keywords": [
      "energy",
      "kinetic",
      "mechanics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "K",
        "name": "Kinetic energy",
        "unit": "Joules (J)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "v",
        "name": "Velocity",
        "unit": "meters per second (m/s)"
      }
    ]
  },
  {
    "id": 21,
    "name": "Potential Energy",
    "formula": "U = m g h",
    "description": "Gravitational potential energy near Earth.",
    "units": "J",
    "subject": "Physics",
    "keywords": [
      "energy",
      "gravity",
      "mechanics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "U",
        "name": "Potential energy",
        "unit": "Joules (J)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "g",
        "name": "Gravitational acceleration",
        "unit": "meters per second squared (m/s²)"
      },
      {
        "symbol": "h",
        "name": "Height",
        "unit": "meters (m)"
      }
    ]
  },
  {
    "id": 22,
    "name": "Conservation of Energy",
    "formula": "E_{total} = K + U = \\text{constant}",
    "description": "Total mechanical energy remains constant without nonconservative forces.",
    "units": "J",
    "subject": "Physics",
    "keywords": [
      "energy",
      "conservation",
      "mechanics"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "E_total",
        "name": "Total energy",
        "unit": "Joules (J)"
      },
      {
        "symbol": "K",
        "name": "Kinetic energy",
        "unit": "Joules (J)"
      },
      {
        "symbol": "U",
        "name": "Potential energy",
        "unit": "Joules (J)"
      }
    ]
  },
  {
    "id": 23,
    "name": "Momentum",
    "formula": "\\mathbf{p} = m \\mathbf{v}",
    "description": "Linear momentum of a particle.",
    "units": "kg m/s",
    "subject": "Physics",
    "keywords": [
      "momentum",
      "mechanics",
      "motion"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "p",
        "name": "Momentum",
        "unit": "kilogram-meters per second (kg·m/s)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "v",
        "name": "Velocity",
        "unit": "meters per second (m/s)"
      }
    ]
  },
  {
    "id": 24,
    "name": "Impulse",
    "formula": "\\mathbf{J} = \\Delta \\mathbf{p} = \\mathbf{F} \\Delta t",
    "description": "Change in momentum caused by a force over time.",
    "units": "N s",
    "subject": "Physics",
    "keywords": [
      "impulse",
      "force",
      "mechanics"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "J",
        "name": "Impulse",
        "unit": "kilogram-meters per second (kg·m/s)"
      },
      {
        "symbol": "Δp",
        "name": "Change in momentum",
        "unit": "kilogram-meters per second (kg·m/s)"
      },
      {
        "symbol": "F",
        "name": "Force",
        "unit": "Newtons (N)"
      },
      {
        "symbol": "Δt",
        "name": "Change in time",
        "unit": "seconds (s)"
      }
    ]
  },
  {
    "id": 25,
    "name": "Torque",
    "formula": "\\tau = r F \\sin\\theta",
    "description": "Rotational equivalent of force.",
    "units": "N m",
    "subject": "Physics",
    "keywords": [
      "torque",
      "rotation",
      "mechanics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "τ",
        "name": "Torque",
        "unit": "Newton-meters (N·m)"
      },
      {
        "symbol": "r",
        "name": "Distance from axis of rotation",
        "unit": "meters (m)"
      },
      {
        "symbol": "F",
        "name": "Force",
        "unit": "Newtons (N)"
      },
      {
        "symbol": "θ",
        "name": "Angle between r and F",
        "unit": "radians"
      }
    ]
  },
  {
    "id": 26,
    "name": "Angular Momentum",
    "formula": "\\mathbf{L} = I \\boldsymbol{\\omega}",
    "description": "Rotational momentum for a rigid body.",
    "units": "kg m^2 / s",
    "subject": "Physics",
    "keywords": [
      "rotation",
      "angular momentum",
      "mechanics"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "L",
        "name": "Angular momentum",
        "unit": "kilogram-meters squared per second (kg·m²/s)"
      },
      {
        "symbol": "I",
        "name": "Moment of inertia",
        "unit": "kilogram-meters squared (kg·m²)"
      },
      {
        "symbol": "ω",
        "name": "Angular velocity",
        "unit": "radians per second (rad/s)"
      }
    ]
  },
  {
    "id": 27,
    "name": "Centripetal Force",
    "formula": "F_c = \\frac{m v^2}{r}",
    "description": "Force required for circular motion.",
    "units": "N",
    "subject": "Physics",
    "keywords": [
      "circular motion",
      "mechanics",
      "force"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "Fc",
        "name": "Centripetal force",
        "unit": "Newtons (N)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "v",
        "name": "Velocity",
        "unit": "meters per second (m/s)"
      },
      {
        "symbol": "r",
        "name": "Radius of circular path",
        "unit": "meters (m)"
      }
    ]
  },
  {
    "id": 28,
    "name": "Circular Velocity",
    "formula": "v = r \\omega",
    "description": "Linear speed from angular velocity.",
    "units": "m/s",
    "subject": "Physics",
    "keywords": [
      "rotation",
      "mechanics",
      "circular motion"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "v",
        "name": "Linear velocity",
        "unit": "meters per second (m/s)"
      },
      {
        "symbol": "r",
        "name": "Radius",
        "unit": "meters (m)"
      },
      {
        "symbol": "ω",
        "name": "Angular velocity",
        "unit": "radians per second (rad/s)"
      }
    ]
  },
  {
    "id": 29,
    "name": "Gravitational Force",
    "formula": "F = G \\frac{m_1 m_2}{r^2}",
    "description": "Newton's law of universal gravitation.",
    "units": "N",
    "subject": "Physics",
    "keywords": [
      "gravity",
      "force",
      "physics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "F",
        "name": "Gravitational force",
        "unit": "Newtons (N)"
      },
      {
        "symbol": "G",
        "name": "Gravitational constant",
        "unit": "N·m²/kg²"
      },
      {
        "symbol": "m₁",
        "name": "Mass of first object",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "m₂",
        "name": "Mass of second object",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "r",
        "name": "Distance between centers of mass",
        "unit": "meters (m)"
      }
    ]
  },
  {
    "id": 30,
    "name": "Wave Speed",
    "formula": "v = f \\lambda",
    "description": "Speed of a wave from frequency and wavelength.",
    "units": "m/s",
    "subject": "Physics",
    "keywords": [
      "waves",
      "optics",
      "mechanics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "v",
        "name": "Wave speed",
        "unit": "meters per second (m/s)"
      },
      {
        "symbol": "f",
        "name": "Frequency",
        "unit": "Hertz (Hz)"
      },
      {
        "symbol": "λ",
        "name": "Wavelength",
        "unit": "meters (m)"
      }
    ]
  },
  {
    "id": 31,
    "name": "Molarity",
    "formula": "M = \\frac{n}{V}",
    "description": "Amount of substance per solution volume.",
    "units": "mol/L",
    "subject": "Chemistry",
    "keywords": [
      "solution",
      "concentration",
      "chemistry"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "M",
        "name": "Molarity",
        "unit": "moles per liter (mol/L)"
      },
      {
        "symbol": "n",
        "name": "Number of moles",
        "unit": "moles (mol)"
      },
      {
        "symbol": "V",
        "name": "Volume",
        "unit": "liters (L)"
      }
    ]
  },
  {
    "id": 32,
    "name": "Molality",
    "formula": "m = \\frac{n_{solut}}{m_{solvent}}",
    "description": "Moles of solute per kilogram of solvent.",
    "units": "mol/kg",
    "subject": "Chemistry",
    "keywords": [
      "solution",
      "chemistry",
      "concentration"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "m",
        "name": "Molality",
        "unit": "moles per kilogram (mol/kg)"
      },
      {
        "symbol": "n_solute",
        "name": "Moles of solute",
        "unit": "moles (mol)"
      },
      {
        "symbol": "m_solvent",
        "name": "Mass of solvent",
        "unit": "kilograms (kg)"
      }
    ]
  },
  {
    "id": 33,
    "name": "Percent Composition",
    "formula": "\\% = \\frac{mass_{component}}{mass_{total}} \\times 100",
    "description": "Mass percentage of a component.",
    "units": "\\%",
    "subject": "Chemistry",
    "keywords": [
      "stoichiometry",
      "chemistry",
      "composition"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "%",
        "name": "Percent composition",
        "unit": "percent (%)"
      },
      {
        "symbol": "mass_component",
        "name": "Mass of component",
        "unit": "grams (g)"
      },
      {
        "symbol": "mass_total",
        "name": "Total mass",
        "unit": "grams (g)"
      }
    ]
  },
  {
    "id": 34,
    "name": "Dilution",
    "formula": "M_1 V_1 = M_2 V_2",
    "description": "Relationship between concentration and volume for dilutions.",
    "units": "mol/L",
    "subject": "Chemistry",
    "keywords": [
      "solution",
      "dilution",
      "chemistry"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "M₁",
        "name": "Initial molarity",
        "unit": "moles per liter (mol/L)"
      },
      {
        "symbol": "V₁",
        "name": "Initial volume",
        "unit": "liters (L)"
      },
      {
        "symbol": "M₂",
        "name": "Final molarity",
        "unit": "moles per liter (mol/L)"
      },
      {
        "symbol": "V₂",
        "name": "Final volume",
        "unit": "liters (L)"
      }
    ]
  },
  {
    "id": 35,
    "name": "Rate Law",
    "formula": "r = k [A]^m [B]^n",
    "description": "Rate of a chemical reaction.",
    "units": "mol/(L s)",
    "subject": "Chemistry",
    "keywords": [
      "kinetics",
      "reaction rate",
      "chemistry"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "r",
        "name": "Reaction rate",
        "unit": "moles per liter per second (mol/L·s)"
      },
      {
        "symbol": "k",
        "name": "Rate constant",
        "unit": "depends on order"
      },
      {
        "symbol": "[A]",
        "name": "Concentration of A",
        "unit": "moles per liter (mol/L)"
      },
      {
        "symbol": "m",
        "name": "Order with respect to A",
        "unit": "unitless"
      },
      {
        "symbol": "[B]",
        "name": "Concentration of B",
        "unit": "moles per liter (mol/L)"
      },
      {
        "symbol": "n",
        "name": "Order with respect to B",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 36,
    "name": "Half-Life First Order",
    "formula": "t_{1/2} = \\frac{\\ln 2}{k}",
    "description": "Half-life of a first-order reaction.",
    "units": "s",
    "subject": "Chemistry",
    "keywords": [
      "kinetics",
      "half-life",
      "chemistry"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "t₁/₂",
        "name": "Half-life",
        "unit": "seconds (s)"
      },
      {
        "symbol": "k",
        "name": "Rate constant",
        "unit": "per second (s⁻¹)"
      }
    ]
  },
  {
    "id": 37,
    "name": "Arrhenius Equation",
    "formula": "k = A e^{-\\frac{E_a}{R T}}",
    "description": "Temperature dependence of reaction rates.",
    "units": "s^{-1}",
    "subject": "Chemistry",
    "keywords": [
      "kinetics",
      "Arrhenius",
      "chemistry"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "k",
        "name": "Rate constant",
        "unit": "depends on order"
      },
      {
        "symbol": "A",
        "name": "Pre-exponential factor",
        "unit": "same units as k"
      },
      {
        "symbol": "Ea",
        "name": "Activation energy",
        "unit": "joules per mole (J/mol)"
      },
      {
        "symbol": "R",
        "name": "Gas constant",
        "unit": "joules per mole-kelvin (J/mol·K)"
      },
      {
        "symbol": "T",
        "name": "Temperature",
        "unit": "Kelvin (K)"
      }
    ]
  },
  {
    "id": 38,
    "name": "Nernst Equation",
    "formula": "E = E^\\circ - \\frac{R T}{n F} \\ln Q",
    "description": "Cell potential under nonstandard conditions.",
    "units": "V",
    "subject": "Chemistry",
    "keywords": [
      "electrochemistry",
      "potential",
      "chemistry"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "E",
        "name": "Cell potential",
        "unit": "volts (V)"
      },
      {
        "symbol": "E°",
        "name": "Standard cell potential",
        "unit": "volts (V)"
      },
      {
        "symbol": "R",
        "name": "Gas constant",
        "unit": "joules per mole-kelvin (J/mol·K)"
      },
      {
        "symbol": "T",
        "name": "Temperature",
        "unit": "Kelvin (K)"
      },
      {
        "symbol": "n",
        "name": "Number of electrons transferred",
        "unit": "unitless"
      },
      {
        "symbol": "F",
        "name": "Faraday's constant",
        "unit": "coulombs per mole (C/mol)"
      },
      {
        "symbol": "Q",
        "name": "Reaction quotient",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 39,
    "name": "Faraday's Law of Electrolysis",
    "formula": "m = \\frac{Q M}{n F}",
    "description": "Mass of substance produced during electrolysis.",
    "units": "g",
    "subject": "Chemistry",
    "keywords": [
      "electrochemistry",
      "Faraday",
      "chemistry"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "m",
        "name": "Mass of substance",
        "unit": "grams (g)"
      },
      {
        "symbol": "Q",
        "name": "Charge",
        "unit": "coulombs (C)"
      },
      {
        "symbol": "M",
        "name": "Molar mass",
        "unit": "grams per mole (g/mol)"
      },
      {
        "symbol": "n",
        "name": "Number of electrons",
        "unit": "unitless"
      },
      {
        "symbol": "F",
        "name": "Faraday's constant",
        "unit": "coulombs per mole (C/mol)"
      }
    ]
  },
  {
    "id": 40,
    "name": "Gibbs Free Energy",
    "formula": "\\Delta G = \\Delta H - T \\Delta S",
    "description": "Maximum non-expansion work at constant temperature and pressure.",
    "units": "J",
    "subject": "Chemistry",
    "keywords": [
      "thermochemistry",
      "energy",
      "chemistry"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "ΔG",
        "name": "Change in Gibbs free energy",
        "unit": "joules per mole (J/mol)"
      },
      {
        "symbol": "ΔH",
        "name": "Change in enthalpy",
        "unit": "joules per mole (J/mol)"
      },
      {
        "symbol": "T",
        "name": "Temperature",
        "unit": "Kelvin (K)"
      },
      {
        "symbol": "ΔS",
        "name": "Change in entropy",
        "unit": "joules per mole-kelvin (J/mol·K)"
      }
    ]
  },
  {
    "id": 41,
    "name": "Entropy Change",
    "formula": "\\Delta S = \\frac{q_{rev}}{T}",
    "description": "Entropy change for reversible heat transfer.",
    "units": "J/K",
    "subject": "Chemistry",
    "keywords": [
      "thermodynamics",
      "entropy",
      "chemistry"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "ΔS",
        "name": "Change in entropy",
        "unit": "joules per kelvin (J/K)"
      },
      {
        "symbol": "q_rev",
        "name": "Reversible heat",
        "unit": "joules (J)"
      },
      {
        "symbol": "T",
        "name": "Temperature",
        "unit": "Kelvin (K)"
      }
    ]
  },
  {
    "id": 42,
    "name": "Hess's Law",
    "formula": "\\Delta H_{rxn} = \\sum \\Delta H_f^{\\circ}(products) - \\sum \\Delta H_f^{\\circ}(reactants)",
    "description": "Heat of reaction from standard enthalpies of formation.",
    "units": "kJ",
    "subject": "Chemistry",
    "keywords": [
      "thermochemistry",
      "Hess",
      "chemistry"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "ΔH_rxn",
        "name": "Enthalpy of reaction",
        "unit": "joules per mole (J/mol)"
      },
      {
        "symbol": "ΔHf°_products",
        "name": "Standard enthalpy of formation of products",
        "unit": "joules per mole (J/mol)"
      },
      {
        "symbol": "ΔHf°_reactants",
        "name": "Standard enthalpy of formation of reactants",
        "unit": "joules per mole (J/mol)"
      }
    ]
  },
  {
    "id": 43,
    "name": "Boiling Point Elevation",
    "formula": "\\Delta T_b = K_b m",
    "description": "Boiling point increase due to a solute.",
    "units": "\\degree C",
    "subject": "Chemistry",
    "keywords": [
      "colligative",
      "solution",
      "chemistry"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "ΔTb",
        "name": "Boiling point elevation",
        "unit": "Kelvin (K)"
      },
      {
        "symbol": "Kb",
        "name": "Boiling point elevation constant",
        "unit": "kelvin-kilogram per mole (K·kg/mol)"
      },
      {
        "symbol": "m",
        "name": "Molality",
        "unit": "moles per kilogram (mol/kg)"
      }
    ]
  },
  {
    "id": 44,
    "name": "Freezing Point Depression",
    "formula": "\\Delta T_f = K_f m",
    "description": "Freezing point decrease due to a solute.",
    "units": "\\degree C",
    "subject": "Chemistry",
    "keywords": [
      "colligative",
      "solution",
      "chemistry"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "ΔTf",
        "name": "Freezing point depression",
        "unit": "Kelvin (K)"
      },
      {
        "symbol": "Kf",
        "name": "Freezing point depression constant",
        "unit": "kelvin-kilogram per mole (K·kg/mol)"
      },
      {
        "symbol": "m",
        "name": "Molality",
        "unit": "moles per kilogram (mol/kg)"
      }
    ]
  },
  {
    "id": 45,
    "name": "pH Definition",
    "formula": "pH = -\\log_{10}[H^+]",
    "description": "Acidity measure of a solution.",
    "units": "unitless",
    "subject": "Chemistry",
    "keywords": [
      "acids",
      "bases",
      "chemistry"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "pH",
        "name": "pH value",
        "unit": "unitless"
      },
      {
        "symbol": "[H⁺]",
        "name": "Hydronium ion concentration",
        "unit": "moles per liter (mol/L)"
      }
    ]
  },
  {
    "id": 46,
    "name": "Ohm's Law",
    "formula": "V = I \\times R",
    "description": "Voltage equals current times resistance.",
    "units": "V",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "circuit theory",
      "electronics",
      "ohm"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "V",
        "name": "Voltage",
        "unit": "volts (V)"
      },
      {
        "symbol": "I",
        "name": "Current",
        "unit": "amperes (A)"
      },
      {
        "symbol": "R",
        "name": "Resistance",
        "unit": "ohms (Ω)"
      }
    ]
  },
  {
    "id": 47,
    "name": "Kirchhoff's Current Law",
    "formula": "\\sum I_{in} = \\sum I_{out}",
    "description": "Sum of currents entering a junction equals exiting.",
    "units": "A",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "circuit theory",
      "electronics",
      "KCL"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "I_in",
        "name": "Current flowing in",
        "unit": "amperes (A)"
      },
      {
        "symbol": "I_out",
        "name": "Current flowing out",
        "unit": "amperes (A)"
      }
    ]
  },
  {
    "id": 48,
    "name": "Kirchhoff's Voltage Law",
    "formula": "\\sum V = 0",
    "description": "Sum of voltages around a closed loop is zero.",
    "units": "V",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "circuit theory",
      "electronics",
      "KVL"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "V",
        "name": "Voltage",
        "unit": "volts (V)"
      }
    ]
  },
  {
    "id": 49,
    "name": "Series Resistance",
    "formula": "R_{eq} = \\sum_{n} R_n",
    "description": "Total resistance of resistors in series.",
    "units": "\\Omega",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "circuit theory",
      "resistance",
      "electronics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "R_eq",
        "name": "Equivalent resistance",
        "unit": "ohms (Ω)"
      },
      {
        "symbol": "Rₙ",
        "name": "Individual resistance",
        "unit": "ohms (Ω)"
      }
    ]
  },
  {
    "id": 50,
    "name": "Parallel Resistance",
    "formula": "\\frac{1}{R_{eq}} = \\sum_{n} \\frac{1}{R_n}",
    "description": "Equivalent resistance of parallel resistors.",
    "units": "\\Omega",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "circuit theory",
      "resistance",
      "electronics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "R_eq",
        "name": "Equivalent resistance",
        "unit": "ohms (Ω)"
      },
      {
        "symbol": "Rₙ",
        "name": "Individual resistance",
        "unit": "ohms (Ω)"
      }
    ]
  },
  {
    "id": 51,
    "name": "Voltage Divider",
    "formula": "V_{out} = V_{in} \\frac{R_2}{R_1 + R_2}",
    "description": "Output voltage from a resistor divider.",
    "units": "V",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "circuit theory",
      "electronics",
      "voltage"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "V_out",
        "name": "Output voltage",
        "unit": "volts (V)"
      },
      {
        "symbol": "V_in",
        "name": "Input voltage",
        "unit": "volts (V)"
      },
      {
        "symbol": "R₁",
        "name": "First resistor",
        "unit": "ohms (Ω)"
      },
      {
        "symbol": "R₂",
        "name": "Second resistor",
        "unit": "ohms (Ω)"
      }
    ]
  },
  {
    "id": 52,
    "name": "Current Divider",
    "formula": "I_{n} = I_{t} \\frac{R_{total}}{R_n}",
    "description": "Branch current in parallel resistors.",
    "units": "A",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "circuit theory",
      "electronics",
      "current"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "Iₙ",
        "name": "Current through nth resistor",
        "unit": "amperes (A)"
      },
      {
        "symbol": "I_t",
        "name": "Total current",
        "unit": "amperes (A)"
      },
      {
        "symbol": "R_total",
        "name": "Total resistance",
        "unit": "ohms (Ω)"
      },
      {
        "symbol": "Rₙ",
        "name": "Individual resistance",
        "unit": "ohms (Ω)"
      }
    ]
  },
  {
    "id": 53,
    "name": "Capacitive Reactance",
    "formula": "X_C = \\frac{1}{2 \\pi f C}",
    "description": "Reactance of a capacitor in an AC circuit.",
    "units": "\\Omega",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "AC circuits",
      "reactance",
      "electronics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "Xc",
        "name": "Capacitive reactance",
        "unit": "ohms (Ω)"
      },
      {
        "symbol": "f",
        "name": "Frequency",
        "unit": "Hertz (Hz)"
      },
      {
        "symbol": "C",
        "name": "Capacitance",
        "unit": "farads (F)"
      }
    ]
  },
  {
    "id": 54,
    "name": "Inductive Reactance",
    "formula": "X_L = 2 \\pi f L",
    "description": "Reactance of an inductor in an AC circuit.",
    "units": "\\Omega",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "AC circuits",
      "reactance",
      "electronics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "XL",
        "name": "Inductive reactance",
        "unit": "ohms (Ω)"
      },
      {
        "symbol": "f",
        "name": "Frequency",
        "unit": "Hertz (Hz)"
      },
      {
        "symbol": "L",
        "name": "Inductance",
        "unit": "henries (H)"
      }
    ]
  },
  {
    "id": 55,
    "name": "Resonant Frequency",
    "formula": "f_r = \\frac{1}{2 \\pi \\sqrt{L C}}",
    "description": "Frequency of an LC circuit resonance.",
    "units": "Hz",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "AC circuits",
      "resonance",
      "electronics"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "fr",
        "name": "Resonant frequency",
        "unit": "Hertz (Hz)"
      },
      {
        "symbol": "L",
        "name": "Inductance",
        "unit": "henries (H)"
      },
      {
        "symbol": "C",
        "name": "Capacitance",
        "unit": "farads (F)"
      }
    ]
  },
  {
    "id": 56,
    "name": "Time Constant RC",
    "formula": "\\tau = R C",
    "description": "Charging/discharging speed of an RC circuit.",
    "units": "s",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "transient",
      "circuits",
      "electronics"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "τ",
        "name": "Time constant",
        "unit": "seconds (s)"
      },
      {
        "symbol": "R",
        "name": "Resistance",
        "unit": "ohms (Ω)"
      },
      {
        "symbol": "C",
        "name": "Capacitance",
        "unit": "farads (F)"
      }
    ]
  },
  {
    "id": 57,
    "name": "Time Constant RL",
    "formula": "\\tau = \\frac{L}{R}",
    "description": "Current response time in an RL circuit.",
    "units": "s",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "transient",
      "circuits",
      "electronics"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "τ",
        "name": "Time constant",
        "unit": "seconds (s)"
      },
      {
        "symbol": "L",
        "name": "Inductance",
        "unit": "henries (H)"
      },
      {
        "symbol": "R",
        "name": "Resistance",
        "unit": "ohms (Ω)"
      }
    ]
  },
  {
    "id": 58,
    "name": "Power in AC",
    "formula": "P = V_{rms} I_{rms} \\cos\\phi",
    "description": "Average real power in AC circuits.",
    "units": "W",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "AC circuits",
      "power",
      "electronics"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "P",
        "name": "Real power",
        "unit": "watts (W)"
      },
      {
        "symbol": "V_rms",
        "name": "RMS voltage",
        "unit": "volts (V)"
      },
      {
        "symbol": "I_rms",
        "name": "RMS current",
        "unit": "amperes (A)"
      },
      {
        "symbol": "φ",
        "name": "Phase angle",
        "unit": "radians"
      }
    ]
  },
  {
    "id": 59,
    "name": "Apparent Power",
    "formula": "S = V_{rms} I_{rms}",
    "description": "Total power magnitude in AC circuits.",
    "units": "VA",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "AC circuits",
      "power",
      "electronics"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "S",
        "name": "Apparent power",
        "unit": "volt-amperes (VA)"
      },
      {
        "symbol": "V_rms",
        "name": "RMS voltage",
        "unit": "volts (V)"
      },
      {
        "symbol": "I_rms",
        "name": "RMS current",
        "unit": "amperes (A)"
      }
    ]
  },
  {
    "id": 60,
    "name": "Reactive Power",
    "formula": "Q = V_{rms} I_{rms} \\sin\\phi",
    "description": "Power stored and returned by reactive elements.",
    "units": "var",
    "subject": "Electrical & Electronics Engineering",
    "keywords": [
      "AC circuits",
      "power",
      "electronics"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "Q",
        "name": "Reactive power",
        "unit": "volt-amperes reactive (VAR)"
      },
      {
        "symbol": "V_rms",
        "name": "RMS voltage",
        "unit": "volts (V)"
      },
      {
        "symbol": "I_rms",
        "name": "RMS current",
        "unit": "amperes (A)"
      },
      {
        "symbol": "φ",
        "name": "Phase angle",
        "unit": "radians"
      }
    ]
  },
  {
    "id": 61,
    "name": "Schrödinger Equation",
    "formula": "i \\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) = -\\frac{\\hbar^2}{2m} \\nabla^2 \\Psi(\\mathbf{r}, t) + V(\\mathbf{r}) \\Psi(\\mathbf{r}, t)",
    "description": "Time-dependent Schrödinger equation.",
    "units": "J",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "wave function",
      "operators"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "Ψ",
        "name": "Wave function",
        "unit": "unitless"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "t",
        "name": "Time",
        "unit": "seconds (s)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "∇²",
        "name": "Laplacian operator",
        "unit": "per meter squared (m⁻²)"
      },
      {
        "symbol": "V",
        "name": "Potential energy",
        "unit": "joules (J)"
      }
    ]
  },
  {
    "id": 62,
    "name": "Time-Independent Schrödinger",
    "formula": "-\\frac{\\hbar^2}{2m} \\nabla^2 \\psi(\\mathbf{r}) + V(\\mathbf{r}) \\psi(\\mathbf{r}) = E \\psi(\\mathbf{r})",
    "description": "Energy eigenvalue equation.",
    "units": "J",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "wave function",
      "eigenvalue"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "ψ",
        "name": "Wave function",
        "unit": "unitless"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "∇²",
        "name": "Laplacian operator",
        "unit": "per meter squared (m⁻²)"
      },
      {
        "symbol": "V",
        "name": "Potential energy",
        "unit": "joules (J)"
      },
      {
        "symbol": "E",
        "name": "Energy",
        "unit": "joules (J)"
      }
    ]
  },
  {
    "id": 63,
    "name": "Wave Function Normalization",
    "formula": "\\int |\\Psi|^2 \\mathrm{d}\\tau = 1",
    "description": "Probability density normalization.",
    "units": "unitless",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "probability",
      "wave function"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "Ψ",
        "name": "Wave function",
        "unit": "unitless"
      },
      {
        "symbol": "τ",
        "name": "Volume element",
        "unit": "cubic meters (m³)"
      }
    ]
  },
  {
    "id": 64,
    "name": "Expectation Value",
    "formula": "\\langle A \\rangle = \\int \\Psi^* \\hat{A} \\Psi \\mathrm{d}\\tau",
    "description": "Average measured value of an observable.",
    "units": "units depend on A",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "operators",
      "expectation"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "⟨A⟩",
        "name": "Expectation value",
        "unit": "depends on observable"
      },
      {
        "symbol": "Ψ",
        "name": "Wave function",
        "unit": "unitless"
      },
      {
        "symbol": "Â",
        "name": "Operator",
        "unit": "depends on operator"
      },
      {
        "symbol": "τ",
        "name": "Volume element",
        "unit": "cubic meters (m³)"
      }
    ]
  },
  {
    "id": 65,
    "name": "Uncertainty Principle",
    "formula": "\\sigma_x \\sigma_p \\ge \\frac{\\hbar}{2}",
    "description": "Lower bound for simultaneous position and momentum precision.",
    "units": "J s",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "uncertainty",
      "operators"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "σx",
        "name": "Uncertainty in position",
        "unit": "meters (m)"
      },
      {
        "symbol": "σp",
        "name": "Uncertainty in momentum",
        "unit": "kilogram-meters per second (kg·m/s)"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      }
    ]
  },
  {
    "id": 66,
    "name": "Momentum Operator",
    "formula": "\\hat{p} = -i \\hbar \\nabla",
    "description": "Quantum mechanical momentum operator.",
    "units": "kg m/s",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "operators",
      "momentum"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "p̂",
        "name": "Momentum operator",
        "unit": "kilogram-meters per second (kg·m/s)"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "∇",
        "name": "Gradient operator",
        "unit": "per meter (m⁻¹)"
      }
    ]
  },
  {
    "id": 67,
    "name": "Hamiltonian Operator",
    "formula": "\\hat{H} = -\\frac{\\hbar^2}{2m} \\nabla^2 + V(\\mathbf{r})",
    "description": "Energy operator of a quantum system.",
    "units": "J",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "operators",
      "Hamiltonian"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "Ĥ",
        "name": "Hamiltonian operator",
        "unit": "joules (J)"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "∇²",
        "name": "Laplacian operator",
        "unit": "per meter squared (m⁻²)"
      },
      {
        "symbol": "V",
        "name": "Potential energy",
        "unit": "joules (J)"
      }
    ]
  },
  {
    "id": 68,
    "name": "Particle in a Box Energy",
    "formula": "E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2}",
    "description": "Energy levels for a 1D infinite square well.",
    "units": "J",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "particle in box",
      "energy levels"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "Eₙ",
        "name": "Energy level n",
        "unit": "joules (J)"
      },
      {
        "symbol": "n",
        "name": "Quantum number",
        "unit": "unitless"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "L",
        "name": "Length of box",
        "unit": "meters (m)"
      }
    ]
  },
  {
    "id": 69,
    "name": "Quantum Harmonic Oscillator",
    "formula": "E_n = \\left(n + \\frac{1}{2}\\right) \\hbar \\omega",
    "description": "Quantized energy of a harmonic oscillator.",
    "units": "J",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "oscillator",
      "energy"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "Eₙ",
        "name": "Energy level n",
        "unit": "joules (J)"
      },
      {
        "symbol": "n",
        "name": "Quantum number",
        "unit": "unitless"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "ω",
        "name": "Angular frequency",
        "unit": "radians per second (rad/s)"
      }
    ]
  },
  {
    "id": 70,
    "name": "Tunneling Probability",
    "formula": "T \\approx e^{-2 \\gamma a}",
    "description": "Transmission probability through a potential barrier.",
    "units": "unitless",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "tunneling",
      "probability"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "T",
        "name": "Tunneling probability",
        "unit": "unitless"
      },
      {
        "symbol": "γ",
        "name": "Decay constant",
        "unit": "per meter (m⁻¹)"
      },
      {
        "symbol": "a",
        "name": "Width of barrier",
        "unit": "meters (m)"
      }
    ]
  },
  {
    "id": 71,
    "name": "de Broglie Relation",
    "formula": "\\lambda = \\frac{h}{p}",
    "description": "Matter wave wavelength.",
    "units": "m",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "wavelength",
      "particle"
    ],
    "difficulty": "Basic",
    "variables": [
      {
        "symbol": "λ",
        "name": "Wavelength",
        "unit": "meters (m)"
      },
      {
        "symbol": "h",
        "name": "Planck's constant",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "p",
        "name": "Momentum",
        "unit": "kilogram-meters per second (kg·m/s)"
      }
    ]
  },
  {
    "id": 72,
    "name": "Spin Operator",
    "formula": "\\hat{S}_z = \\frac{\\hbar}{2} \\begin{pmatrix}1 & 0 \\\\0 & -1\\end{pmatrix}",
    "description": "Spin-z operator for a spin-1/2 particle.",
    "units": "J s",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "spin",
      "operator"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "Ŝz",
        "name": "Spin operator z-component",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      }
    ]
  },
  {
    "id": 73,
    "name": "Pauli Matrices",
    "formula": "\\sigma_x = \\begin{pmatrix}0 & 1 \\\\1 & 0\\end{pmatrix}",
    "description": "Pauli matrix used for spin operators.",
    "units": "unitless",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "spin",
      "matrix"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "σx",
        "name": "Pauli X matrix",
        "unit": "unitless"
      }
    ]
  },
  {
    "id": 74,
    "name": "Probability Current",
    "formula": "\\mathbf{J} = \\frac{\\hbar}{2mi} ( \\Psi^* \\nabla \\Psi - \\Psi \\nabla \\Psi^*)",
    "description": "Flow of probability density.",
    "units": "m^{-2} s^{-1}",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "probability",
      "current"
    ],
    "difficulty": "Advanced",
    "variables": [
      {
        "symbol": "J",
        "name": "Probability current density",
        "unit": "per meter per second (m⁻³/s)"
      },
      {
        "symbol": "ℏ",
        "name": "Reduced Planck's constant",
        "unit": "joule-seconds (J·s)"
      },
      {
        "symbol": "m",
        "name": "Mass",
        "unit": "kilograms (kg)"
      },
      {
        "symbol": "Ψ",
        "name": "Wave function",
        "unit": "unitless"
      },
      {
        "symbol": "∇",
        "name": "Gradient operator",
        "unit": "per meter (m⁻¹)"
      }
    ]
  },
  {
    "id": 75,
    "name": "Born Rule",
    "formula": "P = |\\langle \\phi | \\psi \\rangle|^2",
    "description": "Probability from wavefunction overlap.",
    "units": "unitless",
    "subject": "Quantum Physics",
    "keywords": [
      "quantum",
      "probability",
      "measurement"
    ],
    "difficulty": "Intermediate",
    "variables": [
      {
        "symbol": "P",
        "name": "Probability",
        "unit": "unitless"
      },
      {
        "symbol": "φ",
        "name": "Basis state",
        "unit": "unitless"
      },
      {
        "symbol": "ψ",
        "name": "Wave function",
        "unit": "unitless"
      },
      {
        "symbol": "⟨φ|ψ⟩",
        "name": "Inner product",
        "unit": "unitless"
      }
    ]
  }
];

export default formulas;