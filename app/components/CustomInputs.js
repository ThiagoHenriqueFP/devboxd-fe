// components/CustomInput.js
/**
 * Um componente de input personalizado estilizado com Tailwind CSS.
 *
 * Props:
 * - label: O texto que aparecerá acima do input.
 * - id: Um ID único para ligar a label ao input (essencial para acessibilidade).
 * - error: (Opcional) Uma string de mensagem de erro para ser exibida.
 * - ...rest: Quaisquer outras props de input HTML (ex: type, value, onChange, placeholder, disabled, etc.)
 */
export const CustomInput = React.forwardRef(({ label, id, error, ...rest }, ref) => {
  
  // Classes de estado (normal vs. erro)
  // Isso define as cores da borda e do "anel" de foco (ring)
  const stateClasses = error
    ? "border-red-500 focus:ring-red-300 focus:border-red-500"
    : "border-gray-300 focus:ring-blue-300 focus:border-blue-500";

  return (
    <div className="w-full mb-4">
      
      {/* Label */}
      <label 
        htmlFor={id} 
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
      </label>

      {/* Input */}
      <input
        id={id}
        ref={ref}
        className={`
          w-full p-3 border rounded-md text-base 
          transition-all duration-200
          focus:outline-none focus:ring-2
          ${stateClasses} 
        `}
        {...rest}
      />

      {/* Mensagem de Erro */}
      {error && (
        <span className="block text-red-600 text-sm mt-1">
          {error}
        </span>
      )}
      
    </div>
  );
}); 