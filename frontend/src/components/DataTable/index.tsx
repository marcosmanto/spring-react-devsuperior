import axios from "axios"
import { useEffect, useState } from "react"
import { SalePage } from "types/sale"
import { formatLocalDate } from "utils/format"
import { BASE_URL } from "utils/requests"

function DataTable() {

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: false,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
      .then(response => {
        setPage(response.data)
      })
  }, [])

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(venda => (
          <tr key={venda.id}>
            <td>{formatLocalDate(venda.date, 'dd/MM/yyyy')}</td>
            <td>{venda.seller.name}</td>
            <td>{venda.visited}</td>
            <td>{venda.deals}</td>
            <td>{venda.amount.toFixed(2)}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
