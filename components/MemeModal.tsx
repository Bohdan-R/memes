"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import { useEffect, useState } from "react";

import { Meme } from "../types/index";
import { saveMeme } from "../lib/utils";

type MemeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  meme: Meme;
};

export default function MemeModal({ isOpen, onClose, meme }: MemeModalProps) {
  const [formData, setFormData] = useState<Meme>({ ...meme });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isOpen) {
      setFormData({ ...meme });
      setErrors({});
    }
  }, [isOpen, meme]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (
      !formData.name ||
      formData.name.length < 3 ||
      formData.name.length > 100
    ) {
      newErrors.name = "Name must be 3-100 characters";
    }
    if (!formData.imageUrl || !formData.imageUrl.match(/\.(jpg|jpeg)$/i)) {
      newErrors.imageUrl = "Must be a valid JPG URL";
    }
    if (formData.likes < 0 || formData.likes > 99) {
      newErrors.likes = "Likes must be 0-99";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "likes" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSave = () => {
    if (validate()) {
      saveMeme(formData);
      onClose();
    }
  };

  return (
    <Modal isKeyboardDismissDisabled={false} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Edit Meme</ModalHeader>
        <ModalBody>
          <Input
            errorMessage={errors.name}
            isInvalid={!!errors.name}
            label="Name"
            name="name"
            value={formData.name}
            variant="underlined"
            onChange={(e) => {
              const { name, value } = e.target;

              handleChange(name as keyof Meme, value);
            }}
          />
          <Input
            errorMessage={errors.imageUrl}
            isInvalid={!!errors.imageUrl}
            label="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            variant="underlined"
            onChange={(e) => {
              const { name, value } = e.target;

              handleChange(name as keyof Meme, value);
            }}
          />
          <Input
            errorMessage={errors.likes}
            isInvalid={!!errors.likes}
            label="Likes"
            name="likes"
            type="number"
            value={formData.likes.toString()}
            variant="underlined"
            onChange={(e) => {
              const { name, value } = e.target;

              handleChange(name as keyof Meme, value);
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="default" size="sm" variant="ghost" onPress={onClose}>
            Close
          </Button>
          <Button
            color="primary"
            size="sm"
            variant="ghost"
            onPress={handleSave}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
