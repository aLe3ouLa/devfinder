const Stats = ({ title, stat }) => {
    return <div>
    <h3 className="text-sm text-slate-800 dark:text-slate-400">{title}</h3>
    <p className="text-gray-600 dark:text-gray-200">
      <strong>{stat}</strong>
    </p>
  </div>
}

export default Stats