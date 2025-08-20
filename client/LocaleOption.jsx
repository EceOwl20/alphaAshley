// Bu helper bileşen value prop'u olan bir wrapper döner
export default function LocaleOption({ value, children }) {
  return <div data-value={value}>{children}</div>;
}
