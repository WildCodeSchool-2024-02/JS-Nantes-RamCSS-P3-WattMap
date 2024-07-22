import PropTypes from "prop-types";

export default function TableStats({ columns, data }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        {columns.map((column) => (
                            <td key={column}>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
TableStats.propTypes = {
    columns: PropTypes.bool.isRequired,
    data: PropTypes.func.isRequired,
};
