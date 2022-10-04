import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import HeaderScreen from "@/components/shared/Header";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import Textarea from "@/components/shared/Textarea";
import TextEditor from "@/components/shared/TextEditor";
import React from "react";

const CreatePostSoftware = () => {
  return (
    <div className="screen screen-100">
      <Breadcrumbs items={["Software", "Create Post"]} />
      <HeaderScreen title="Create a post">
        <Button className="primary">Publish</Button>
      </HeaderScreen>
      <div className="grid">
        <div>
          <Field label="Title" tip="Write a title for your post">
            <Input />
          </Field>
          <Field label="Category">
            <Select />
          </Field>
          <Field label="Image">
            <ImageInput />
          </Field>
          <Field label="Description" tip="Write a description">
            <Textarea />
          </Field>
        </div>
        <div>
          <Field label="Content">
            <TextEditor className="page" />
          </Field>
        </div>
      </div>
    </div>
  );
};

export default CreatePostSoftware;
