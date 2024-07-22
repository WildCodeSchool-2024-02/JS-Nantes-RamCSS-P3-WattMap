import PropTypes from "prop-types";
import "../styles/table.css";

export default function TableStats({ columns, dataTable }) {
    return (
        <div className="table-container table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map((row) => (
                        <tr key={row.id}>
                            {columns.map((column) => (
                                <td key={column}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
TableStats.propTypes = {
    columns: PropTypes.bool.isRequired,
    dataTable: PropTypes.func.isRequired,
};
