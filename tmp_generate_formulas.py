"""Generate a clean, escaped JavaScript data file of formulas.

This script defines `SECTIONS`, validates entries, assigns stable ids,
and writes `src/data/formulas.js` as:

  const formulas = <JSON array>;

  export default formulas;

The JSON output is pretty-printed for maintainability and is safe for
consumption by the React app.
"""

from pathlib import Path
import json
from typing import List, Tuple, Any


SECTIONS: List[Tuple[str, List[Tuple[Any, ...]]]] = [
    ('Mathematics', [
        ('Slope of a Line', 'm = \\frac{y_2 - y_1}{x_2 - x_1}', 'Slope between two points on a line.', 'unitless', ['slope', 'line', 'geometry'], 'Basic'),
        ('Quadratic Formula', 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', 'Solutions for quadratic polynomial equations.', 'unitless', ['quadratic', 'roots', 'algebra'], 'Intermediate'),
        ('Distance Formula', 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}', 'Distance between two points in the plane.', 'units', ['distance', 'geometry', 'coordinate geometry'], 'Basic'),
        ('Midpoint Formula', 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)', 'Midpoint of a segment between two points.', 'units', ['midpoint', 'coordinate geometry', 'algebra'], 'Basic'),
        ('Circle Equation', '(x - h)^2 + (y - k)^2 = r^2', 'Equation of a circle centered at (h,k).', 'units^2', ['circle', 'geometry', 'conic'], 'Basic'),
        ('Binomial Theorem', '(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k', 'Expansion formula for binomial expressions.', 'units^n', ['binomial', 'combinatorics', 'algebra'], 'Intermediate'),
        ('Arithmetic Series', 'S_n = \\frac{n}{2}(a_1 + a_n)', 'Sum of the first n terms of an arithmetic sequence.', 'units', ['series', 'algebra', 'arithmetic'], 'Basic'),
        ('Geometric Series', 'S_n = a_1 \\frac{1 - r^n}{1 - r}', 'Sum of n terms of a geometric series.', 'units', ['series', 'algebra', 'geometric'], 'Intermediate'),
        ("Derivative Definition", "f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}", 'Limit definition of the derivative.', 'units per unit', ['derivative', 'calculus', 'limit'], 'Advanced'),
        ('Power Rule', '\\frac{d}{dx} x^n = n x^{n-1}', 'Derivative of a power function.', 'units per unit', ['derivative', 'calculus', 'power rule'], 'Basic'),
        ('Chain Rule', "\\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x)", 'Derivative of a composite function.', 'units per unit', ['derivative', 'calculus', 'chain rule'], 'Intermediate'),
        ('Integral Definition', '\\int_a^b f(x) \\mathrm{d}x', 'Definite integral of f from a to b.', 'units', ['integral', 'calculus', 'area'], 'Basic'),
        ('Fundamental Theorem of Calculus', '\\frac{d}{dx} \\int_a^x f(t) \\mathrm{d}t = f(x)', 'Differentiation of an integral function.', 'units per unit', ['calculus', 'fundamental theorem', 'integral'], 'Intermediate'),
        ('Taylor Series', 'f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!} (x-a)^n', 'Power series expansion of a function about x = a.', 'unitless', ['series', 'calculus', 'Taylor'], 'Advanced'),
        ('L\'Hopital\'s Rule', "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}", 'Evaluate indeterminate limits using derivatives.', 'unitless', ['limits', 'calculus', 'derivatives'], 'Intermediate'),
    ]),
    ('Physics', [
        ("Newton's Second Law", '\\mathbf{F} = m \\mathbf{a}', 'Force equals mass times acceleration.', 'N', ['mechanics', 'force', 'motion'], 'Basic'),
        ('Kinematic Equation', 'v = v_0 + a t', 'Final velocity under constant acceleration.', 'm/s', ['kinematics', 'motion', 'mechanics'], 'Basic'),
        ('Displacement', 'x = x_0 + v_0 t + \\frac{1}{2} a t^2', 'Position after constant acceleration.', 'm', ['kinematics', 'motion', 'mechanics'], 'Basic'),
        ('Work', 'W = F d \\cos\\theta', 'Work done by a force over a displacement.', 'J', ['work', 'energy', 'mechanics'], 'Basic'),
        ('Kinetic Energy', 'K = \\frac{1}{2} m v^2', 'Energy of motion for a mass.', 'J', ['energy', 'kinetic', 'mechanics'], 'Basic'),
        ('Potential Energy', 'U = m g h', 'Gravitational potential energy near Earth.', 'J', ['energy', 'gravity', 'mechanics'], 'Basic'),
        ('Conservation of Energy', 'E_{total} = K + U = \\text{constant}', 'Total mechanical energy remains constant without nonconservative forces.', 'J', ['energy', 'conservation', 'mechanics'], 'Intermediate'),
        ('Momentum', '\\mathbf{p} = m \\mathbf{v}', 'Linear momentum of a particle.', 'kg m/s', ['momentum', 'mechanics', 'motion'], 'Basic'),
        ('Impulse', '\\mathbf{J} = \\Delta \\mathbf{p} = \\mathbf{F} \\Delta t', 'Change in momentum caused by a force over time.', 'N s', ['impulse', 'force', 'mechanics'], 'Intermediate'),
        ('Torque', '\\tau = r F \\sin\\theta', 'Rotational equivalent of force.', 'N m', ['torque', 'rotation', 'mechanics'], 'Basic'),
        ('Angular Momentum', '\\mathbf{L} = I \\boldsymbol{\\omega}', 'Rotational momentum for a rigid body.', 'kg m^2 / s', ['rotation', 'angular momentum', 'mechanics'], 'Intermediate'),
        ('Centripetal Force', 'F_c = \\frac{m v^2}{r}', 'Force required for circular motion.', 'N', ['circular motion', 'mechanics', 'force'], 'Basic'),
        ('Circular Velocity', 'v = r \\omega', 'Linear speed from angular velocity.', 'm/s', ['rotation', 'mechanics', 'circular motion'], 'Basic'),
        ('Gravitational Force', 'F = G \\frac{m_1 m_2}{r^2}', "Newton's law of universal gravitation.", 'N', ['gravity', 'force', 'physics'], 'Basic'),
        ('Wave Speed', 'v = f \\lambda', 'Speed of a wave from frequency and wavelength.', 'm/s', ['waves', 'optics', 'mechanics'], 'Basic'),
    ]),
    ('Chemistry', [
        ('Molarity', 'M = \\frac{n}{V}', 'Amount of substance per solution volume.', 'mol/L', ['solution', 'concentration', 'chemistry'], 'Basic'),
        ('Molality', 'm = \\frac{n_{solut}}{m_{solvent}}', 'Moles of solute per kilogram of solvent.', 'mol/kg', ['solution', 'chemistry', 'concentration'], 'Basic'),
        ('Percent Composition', '\\% = \\frac{mass_{component}}{mass_{total}} \\times 100', 'Mass percentage of a component.', '\\%', ['stoichiometry', 'chemistry', 'composition'], 'Basic'),
        ('Dilution', 'M_1 V_1 = M_2 V_2', 'Relationship between concentration and volume for dilutions.', 'mol/L', ['solution', 'dilution', 'chemistry'], 'Basic'),
        ('Rate Law', 'r = k [A]^m [B]^n', 'Rate of a chemical reaction.', 'mol/(L s)', ['kinetics', 'reaction rate', 'chemistry'], 'Intermediate'),
        ('Half-Life First Order', 't_{1/2} = \\frac{\\ln 2}{k}', 'Half-life of a first-order reaction.', 's', ['kinetics', 'half-life', 'chemistry'], 'Intermediate'),
        ('Arrhenius Equation', 'k = A e^{-\\frac{E_a}{R T}}', 'Temperature dependence of reaction rates.', 's^{-1}', ['kinetics', 'Arrhenius', 'chemistry'], 'Advanced'),
        ('Nernst Equation', 'E = E^\\circ - \\frac{R T}{n F} \\ln Q', 'Cell potential under nonstandard conditions.', 'V', ['electrochemistry', 'potential', 'chemistry'], 'Advanced'),
        ("Faraday's Law of Electrolysis", 'm = \\frac{Q M}{n F}', 'Mass of substance produced during electrolysis.', 'g', ['electrochemistry', 'Faraday', 'chemistry'], 'Intermediate'),
        ('Gibbs Free Energy', '\\Delta G = \\Delta H - T \\Delta S', 'Maximum non-expansion work at constant temperature and pressure.', 'J', ['thermochemistry', 'energy', 'chemistry'], 'Intermediate'),
        ('Entropy Change', '\\Delta S = \\frac{q_{rev}}{T}', 'Entropy change for reversible heat transfer.', 'J/K', ['thermodynamics', 'entropy', 'chemistry'], 'Intermediate'),
        ("Hess's Law", '\\Delta H_{rxn} = \\sum \\Delta H_f^{\\circ}(products) - \\sum \\Delta H_f^{\\circ}(reactants)', 'Heat of reaction from standard enthalpies of formation.', 'kJ', ['thermochemistry', 'Hess', 'chemistry'], 'Advanced'),
        ('Boiling Point Elevation', '\\Delta T_b = K_b m', 'Boiling point increase due to a solute.', '\\degree C', ['colligative', 'solution', 'chemistry'], 'Intermediate'),
        ('Freezing Point Depression', '\\Delta T_f = K_f m', 'Freezing point decrease due to a solute.', '\\degree C', ['colligative', 'solution', 'chemistry'], 'Intermediate'),
        ('pH Definition', 'pH = -\\log_{10}[H^+]', 'Acidity measure of a solution.', 'unitless', ['acids', 'bases', 'chemistry'], 'Basic'),
    ]),
    ('Electrical & Electronics Engineering', [
        ("Ohm's Law", 'V = I \\times R', 'Voltage equals current times resistance.', 'V', ['circuit theory', 'electronics', 'ohm'], 'Basic'),
        ("Kirchhoff's Current Law", '\\sum I_{in} = \\sum I_{out}', 'Sum of currents entering a junction equals exiting.', 'A', ['circuit theory', 'electronics', 'KCL'], 'Intermediate'),
        ("Kirchhoff's Voltage Law", '\\sum V = 0', 'Sum of voltages around a closed loop is zero.', 'V', ['circuit theory', 'electronics', 'KVL'], 'Intermediate'),
        ('Series Resistance', 'R_{eq} = \\sum_{n} R_n', 'Total resistance of resistors in series.', '\\Omega', ['circuit theory', 'resistance', 'electronics'], 'Basic'),
        ('Parallel Resistance', '\\frac{1}{R_{eq}} = \\sum_{n} \\frac{1}{R_n}', 'Equivalent resistance of parallel resistors.', '\\Omega', ['circuit theory', 'resistance', 'electronics'], 'Basic'),
        ('Voltage Divider', 'V_{out} = V_{in} \\frac{R_2}{R_1 + R_2}', 'Output voltage from a resistor divider.', 'V', ['circuit theory', 'electronics', 'voltage'], 'Intermediate'),
        ('Current Divider', 'I_{n} = I_{t} \\frac{R_{total}}{R_n}', 'Branch current in parallel resistors.', 'A', ['circuit theory', 'electronics', 'current'], 'Intermediate'),
        ('Capacitive Reactance', 'X_C = \\frac{1}{2 \\pi f C}', 'Reactance of a capacitor in an AC circuit.', '\\Omega', ['AC circuits', 'reactance', 'electronics'], 'Basic'),
        ('Inductive Reactance', 'X_L = 2 \\pi f L', 'Reactance of an inductor in an AC circuit.', '\\Omega', ['AC circuits', 'reactance', 'electronics'], 'Basic'),
        ('Resonant Frequency', 'f_r = \\frac{1}{2 \\pi \\sqrt{L C}}', 'Frequency of an LC circuit resonance.', 'Hz', ['AC circuits', 'resonance', 'electronics'], 'Intermediate'),
        ('Time Constant RC', '\\tau = R C', 'Charging/discharging speed of an RC circuit.', 's', ['transient', 'circuits', 'electronics'], 'Basic'),
        ('Time Constant RL', '\\tau = \\frac{L}{R}', 'Current response time in an RL circuit.', 's', ['transient', 'circuits', 'electronics'], 'Intermediate'),
        ('Power in AC', 'P = V_{rms} I_{rms} \\cos\\phi', 'Average real power in AC circuits.', 'W', ['AC circuits', 'power', 'electronics'], 'Intermediate'),
        ('Apparent Power', 'S = V_{rms} I_{rms}', 'Total power magnitude in AC circuits.', 'VA', ['AC circuits', 'power', 'electronics'], 'Intermediate'),
        ('Reactive Power', 'Q = V_{rms} I_{rms} \\sin\\phi', 'Power stored and returned by reactive elements.', 'var', ['AC circuits', 'power', 'electronics'], 'Intermediate'),
    ]),
    ('Quantum Physics', [
        ('Schrödinger Equation', 'i \\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) = -\\frac{\\hbar^2}{2m} \\n+abla^2 \\Psi(\\mathbf{r}, t) + V(\\mathbf{r}) \\Psi(\\mathbf{r}, t)', 'Time-dependent Schrödinger equation.', 'J', ['quantum', 'wave function', 'operators'], 'Advanced'),
        ('Time-Independent Schrödinger', '-\\frac{\\hbar^2}{2m} \\n+abla^2 \\psi(\\mathbf{r}) + V(\\mathbf{r}) \\psi(\\mathbf{r}) = E \\psi(\\mathbf{r})', 'Energy eigenvalue equation.', 'J', ['quantum', 'wave function', 'eigenvalue'], 'Advanced'),
        ('Wave Function Normalization', '\\int |\\Psi|^2 \\mathrm{d}\\tau = 1', 'Probability density normalization.', 'unitless', ['quantum', 'probability', 'wave function'], 'Basic'),
        ('Expectation Value', '\\langle A \\rangle = \\int \\Psi^* \\hat{A} \\Psi \\mathrm{d}\\tau', 'Average measured value of an observable.', 'units depend on A', ['quantum', 'operators', 'expectation'], 'Advanced'),
        ('Uncertainty Principle', '\\sigma_x \\sigma_p \\ge \\frac{\\hbar}{2}', 'Lower bound for simultaneous position and momentum precision.', 'J s', ['quantum', 'uncertainty', 'operators'], 'Intermediate'),
        ('Momentum Operator', '\\hat{p} = -i \\hbar \\n+abla', 'Quantum mechanical momentum operator.', 'kg m/s', ['quantum', 'operators', 'momentum'], 'Advanced'),
        ('Hamiltonian Operator', '\\hat{H} = -\\frac{\\hbar^2}{2m} \\n+abla^2 + V(\\mathbf{r})', 'Energy operator of a quantum system.', 'J', ['quantum', 'operators', 'Hamiltonian'], 'Advanced'),
        ('Particle in a Box Energy', 'E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2}', 'Energy levels for a 1D infinite square well.', 'J', ['quantum', 'particle in box', 'energy levels'], 'Intermediate'),
        ('Quantum Harmonic Oscillator', 'E_n = \\left(n + \\frac{1}{2}\\right) \\hbar \\omega', 'Quantized energy of a harmonic oscillator.', 'J', ['quantum', 'oscillator', 'energy'], 'Intermediate'),
        ('Tunneling Probability', 'T \\approx e^{-2 \\gamma a}', 'Transmission probability through a potential barrier.', 'unitless', ['quantum', 'tunneling', 'probability'], 'Advanced'),
        ('de Broglie Relation', '\\lambda = \\frac{h}{p}', 'Matter wave wavelength.', 'm', ['quantum', 'wavelength', 'particle'], 'Basic'),
        ('Spin Operator', '\\hat{S}_z = \\frac{\\hbar}{2} \\begin{pmatrix}1 & 0 \\\\0 & -1\\end{pmatrix}', 'Spin-z operator for a spin-1/2 particle.', 'J s', ['quantum', 'spin', 'operator'], 'Advanced'),
        ('Pauli Matrices', '\\sigma_x = \\begin{pmatrix}0 & 1 \\\\1 & 0\\end{pmatrix}', 'Pauli matrix used for spin operators.', 'unitless', ['quantum', 'spin', 'matrix'], 'Advanced'),
        ('Probability Current', '\\mathbf{J} = \\frac{\\hbar}{2mi} ( \\Psi^* \\n+abla \\Psi - \\Psi \\nabla \\Psi^*)', 'Flow of probability density.', 'm^{-2} s^{-1}', ['quantum', 'probability', 'current'], 'Advanced'),
        ('Born Rule', 'P = |\\langle \\phi | \\psi \\rangle|^2', 'Probability from wavefunction overlap.', 'unitless', ['quantum', 'probability', 'measurement'], 'Intermediate'),
    ]),
]


def validate_section_entries(sections: List[Tuple[str, List[Tuple[Any, ...]]]]) -> None:
    """Ensure each formula tuple has the expected 6 elements.

    Raises ValueError if any entry is malformed, with contextual info.
    """
    for subj_name, items in sections:
        for idx, item in enumerate(items, start=1):
            if not isinstance(item, tuple) or len(item) != 6:
                raise ValueError(f"Malformed entry in subject '{subj_name}' at index {idx}: {item!r}")


def build_formulas(sections: List[Tuple[str, List[Tuple[Any, ...]]]]) -> List[dict]:
    """Flatten sections and assign stable integer ids.

    Key order: id, name, formula, description, units, subject, keywords, difficulty
    """
    formulas: List[dict] = []
    current_id = 1
    for subject, items in sections:
        for name, formula, description, units, keywords, difficulty in items:
            formulas.append({
                'id': current_id,
                'name': name,
                'formula': formula,
                'description': description,
                'units': units,
                'subject': subject,
                'keywords': keywords,
                'difficulty': difficulty,
            })
            current_id += 1
    return formulas


def write_js_file(formulas: List[dict], out_path: Path) -> None:
    """Write the `src/data/formulas.js` file with pretty JSON embedded."""
    js = json.dumps(formulas, ensure_ascii=False, indent=2)
    content = f"const formulas = {js};\n\nexport default formulas;\n"
    out_path.write_text(content, encoding='utf-8')


def main() -> None:
    validate_section_entries(SECTIONS)
    formulas = build_formulas(SECTIONS)
    assert len(formulas) >= 75, f"expected >=75 formulas, got {len(formulas)}"
    out_file = Path('src/data/formulas.js')
    out_file.parent.mkdir(parents=True, exist_ok=True)
    write_js_file(formulas, out_file)
    print(f'Generated {len(formulas)} formulas -> {out_file}')


if __name__ == '__main__':
    main()

