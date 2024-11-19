import React, { useState } from "react";
import type { TagCreate } from "../entities/tag";

interface TagFormProps {
  initialData?: TagCreate;
  onSubmit: (data: TagCreate) => Promise<void>;
}

const TagForm: React.FC<TagFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<TagCreate>(
    initialData || { name: "" }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await onSubmit(formData);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        const response = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Tag
      </button>
    </form>
  );
};

export default TagForm;
