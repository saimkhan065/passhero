"use client";
import Button from "@/components/Button";
import ModalAddForm from "@/components/ModalAddForm";
import Table from "@/components/Table";
import { RecordType } from "@/utils/Types";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession(); // Hook to get session data

  const columns = ["username", "url", "password"];
  const [data, setData] = useState([
    { username: "John Doe", url: "30", password: "john@example.com" },
    { username: "Jane Smith", url: "25", password: "jane@example.com" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onAddRecord = (newRecord: RecordType) => {
    setData((prevData) => [...prevData, newRecord]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  if (!session)
    return (
      <>
        <Button type={"button"} onClick={() => signIn("google")}>
          Sign in with Google
        </Button>
      </>
    );
  return (
    <>
      <ol>
        <li>home page</li>
        <li>login / signup</li>
        <li>dashboard -{">"} currently implementing</li>
      </ol>
      <Button type={"button"} disabled={true}>
        Test Button
      </Button>

      {/* {!session ? (
        <Button type="button" onClick={() => signIn("google")}>
          Sign in with Google
        </Button>
      ) : (
        <>
          <p>Welcome, {session.user?.name}</p>
          <Button type="button" onClick={() => signOut()}>
            Sign out
          </Button>
        </>
      )} */}
      <>
        <p>Welcome, {session.user?.name}</p>
        <Button type="button" onClick={() => signOut()}>
          Sign out
        </Button>
      </>

      <Table columns={columns} data={data}></Table>
      <Button type={"button"} onClick={openModal}>
        Add Password
      </Button>
      <ModalAddForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddRecord={onAddRecord}
      />
    </>
  );
}
