import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api, discord, github } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}
interface TransactionInput {
  title: string;
  type: string;
  category: string;
  amount: number;
}
interface TransactionsProviderProps {
  children: ReactNode;
}
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  //discord
  //client_id: '824415522945761300'
  //cliente_secret: 'c6dgmClIEFEce17LUjh3YSa_Ke0Krp4r'
  //https://discord.com/api/oauth2/authorize?client_id=824415522945761300&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=email%20identify
  useEffect(() => {
    // api
    //   .get("transactions")
    //   .then((response) => setTransactions(response.data.transactions));
    const code = new URL(window.location.href).searchParams.get("code");

    const data = {
      client_id: "824415522945761300",
      client_secret: "c6dgmClIEFEce17LUjh3YSa_Ke0Krp4r",
      grant_type: "authorization_code",
      code: code,
      scope: "identify email",
    };

    //      GITHUB
    // const data = {
    //   cliente_id: "f11361154102bf62e310",
    //   client_secret: "2d5ccefc41b096d471f536d403891ad0abcd7c5a",
    //   code: token,
    // };
    // github
    //   .post(
    //     "/login/oauth/access_token",
    //     {},
    //     { params: data, headers: { Accept: "application/json" } }
    //   )
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
