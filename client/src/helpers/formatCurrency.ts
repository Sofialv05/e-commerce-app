export default function formatCurrency(price: number) {
  const idr = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return idr.format(price);
}
