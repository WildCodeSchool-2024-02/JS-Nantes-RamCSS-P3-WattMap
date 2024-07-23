import PropTypes from "prop-types";
import "../styles/table.css";

export default function TableStats({ caption, columns, dataTable }) {
    return (
        <div className="table-container table-responsive">
            <table className="table">
                <caption>{caption}</caption>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map((row) => (
                        <tr key={`${row.id}-${Math.random()}`}>
                            {columns.map((column) => (
                                <td key={`${column}-${Math.random()}`}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
TableStats.propTypes = {
    caption: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    dataTable: PropTypes.arrayOf(
        PropTypes.shape({
            pseudo: PropTypes.string,
            email: PropTypes.string.isRequired,
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            imgUrl: PropTypes.string,
            isAdmin: PropTypes.number,
        })
    ).isRequired,

};
