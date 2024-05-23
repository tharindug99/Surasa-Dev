import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const CustomersTable = () => {
    const initialData = [
        {
          id: "1",
          name: "John Doe",
          mobile: "123-456-7890",
          loyaltyPoints: 120,
          email: "john.doe@example.com",
        },
        {
          id: "2",
          name: "Jane Smith",
          mobile: "234-567-8901",
          loyaltyPoints: 150,
          email: "jane.smith@example.com",
        },
        {
          id: "3",
          name: "Sam Johnson",
          mobile: "345-678-9012",
          loyaltyPoints: 80,
          email: "sam.johnson@example.com",
        },
        {
          id: "4",
          name: "Chris Evans",
          mobile: "456-789-0123",
          loyaltyPoints: 200,
          email: "chris.evans@example.com",
        },
        {
          id: "5",
          name: "Emma Watson",
          mobile: "567-890-1234",
          loyaltyPoints: 95,
          email: "emma.watson@example.com",
        },
        {
          id: "6",
          name: "Robert Downey",
          mobile: "678-901-2345",
          loyaltyPoints: 300,
          email: "robert.downey@example.com",
        },
        {
          id: "7",
          name: "Scarlett Johansson",
          mobile: "789-012-3456",
          loyaltyPoints: 180,
          email: "scarlett.johansson@example.com",
        },
        {
          id: "8",
          name: "Mark Ruffalo",
          mobile: "890-123-4567",
          loyaltyPoints: 220,
          email: "mark.ruffalo@example.com",
        },
        {
          id: "9",
          name: "Chris Hemsworth",
          mobile: "901-234-5678",
          loyaltyPoints: 160,
          email: "chris.hemsworth@example.com",
        },
        {
          id: "10",
          name: "Tom Hiddleston",
          mobile: "012-345-6789",
          loyaltyPoints: 145,
          email: "tom.hiddleston@example.com",
        },
        {
          id: "11",
          name: "Jeremy Renner",
          mobile: "123-456-7891",
          loyaltyPoints: 110,
          email: "jeremy.renner@example.com",
        },
        {
          id: "12",
          name: "Brie Larson",
          mobile: "234-567-8902",
          loyaltyPoints: 175,
          email: "brie.larson@example.com",
        },
        {
          id: "13",
          name: "Chadwick Boseman",
          mobile: "345-678-9013",
          loyaltyPoints: 200,
          email: "chadwick.boseman@example.com",
        },
        {
          id: "14",
          name: "Tom Holland",
          mobile: "456-789-0124",
          loyaltyPoints: 125,
          email: "tom.holland@example.com",
        },
        {
          id: "15",
          name: "Benedict Cumberbatch",
          mobile: "567-890-1235",
          loyaltyPoints: 210,
          email: "benedict.cumberbatch@example.com",
        },
        {
          id: "16",
          name: "Paul Rudd",
          mobile: "678-901-2346",
          loyaltyPoints: 100,
          email: "paul.rudd@example.com",
        },
        {
          id: "17",
          name: "Elizabeth Olsen",
          mobile: "789-012-3457",
          loyaltyPoints: 190,
          email: "elizabeth.olsen@example.com",
        },
        {
          id: "18",
          name: "Anthony Mackie",
          mobile: "890-123-4568",
          loyaltyPoints: 135,
          email: "anthony.mackie@example.com",
        },
        {
          id: "19",
          name: "Sebastian Stan",
          mobile: "901-234-5679",
          loyaltyPoints: 140,
          email: "sebastian.stan@example.com",
        },
        {
          id: "20",
          name: "Don Cheadle",
          mobile: "012-345-6790",
          loyaltyPoints: 165,
          email: "don.cheadle@example.com",
        },
      ];

  const [data, setData] = React.useState({ nodes: initialData });
  const [search, setSearch] = React.useState("");

  const theme = useTheme(getTheme());

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filteredNodes = initialData.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setData({ nodes: filteredNodes });
  };

  const handleClear = () => {
    setSearch("");
    setData({ nodes: initialData });
  };

  const COLUMNS = [
    { label: "Customer Name", renderCell: (item) => item.name },
    { label: "Mobile No.", renderCell: (item) => item.mobile },
    { label: "Loyalty Points", renderCell: (item) => item.loyaltyPoints },
    { label: "Email", renderCell: (item) => item.email },
  ];

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="search">
          Search by Customer Name:&nbsp;
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
            style={{ color: "black", marginRight: "10px" }}
          />
          <button onClick={handleClear} style={{ cursor: "pointer" }}>
            Clear
          </button>
        </label>
      </div>
      <CompactTable columns={COLUMNS} data={data} theme={theme} />
    </>
  );
};

export default CustomersTable;
