"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  useDisclosure,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";

import { Meme } from "../types/index";
import { getMemes } from "../lib/utils";

import MemeModal from "./MemeModal";

const columns = [
  {
    key: "number",
    label: "№",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "likes",
    label: "Likes",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export default function MemeTable() {
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const memes = getMemes();

  const handleEdit = (meme: Meme) => {
    setSelectedMeme(meme);
    onOpen();
  };

  return (
    <>
      <Table aria-label="Memes table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align={
                column.key === columns[columns.length - 1].key ? "end" : "start"
              }
              className="text-xl "
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow
              key={meme.id}
              className="hover:bg-default-100 transition-colors duration-200"
            >
              <TableCell className="rounded-tl-lg rounded-bl-lg">
                {meme.id}
              </TableCell>
              <TableCell>{meme.name}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell className="text-right rounded-tr-lg rounded-br-lg">
                <Button
                  color="primary"
                  size="sm"
                  startContent={<MdModeEdit />}
                  variant="ghost"
                  onPress={() => handleEdit(meme)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedMeme && (
        <MemeModal isOpen={isOpen} meme={selectedMeme} onClose={onClose} />
      )}
    </>
  );
}
