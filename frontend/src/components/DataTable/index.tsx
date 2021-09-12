import axios from "axios"
import Pagination from "components/Pagination"
import { Fragment, useEffect, useState } from "react"
import { SalePage } from "types/sale"
import { formatLocalDate } from "utils/format"
import { BASE_URL } from "utils/requests"

function DataTable() {

  const  [activePage, setActivePage] = useState(0)

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: false,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
      .then(response => {
        setPage(response.data)
      })
  }, [activePage])

  const changePage = (index: number) => {
    setActivePage(index)
  }

  return (
    <Fragment>
      <Pagination page={page} onPageChange={changePage} />
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
    </Fragment>
  )
}

export default DataTable
