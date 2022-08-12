const Button = ({ text, click, className }) => {
    return (
        <button className={`px-6 py-3 bg-gradient-to-r from-violet-500 dark:from-violet-800 to-fuchsia-500 dark:to-fuchsia-800 text-white rounded-lg shadow text-sm ${className}`} onClick={click}>
            {text}
        </button>
    )
}

export default Button