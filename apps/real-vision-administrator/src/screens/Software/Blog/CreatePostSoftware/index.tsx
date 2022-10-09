import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import ConfirmModal from "@/components/shared/ConfirmModal";
import Field from "@/components/shared/Field";
import HeaderScreen from "@/components/shared/Header";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import Textarea from "@/components/shared/Textarea";
import TextEditor from "@/components/shared/TextEditor";
import { createSoftwarePost, reset } from "@/redux/states";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const categories = [
  {
    title: 'Automatizacion',
    value: 'Automatization',
  },
  {
    title: 'Empresas',
    value: 'Enterprises',
  },
  {
    title: 'Marketing',
    value: 'Marketing',
  },
  {
    title: 'UI/UX',
    value: 'UI/UX',
  },
  {
    title: 'Desarrollo',
    value: 'Development',
  },
  {
    title: 'Tecnologia',
    value: 'Technology',
  },
] 

const CreatePostSoftware = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const userState = useSelector((state: AppStore) => state.user)
  const {success} = useSelector((state: AppStore) => state.softwarePosts)

  const dispatch = useDispatch();
  const onSubmit = (e:any) => {
    e.preventDefault();
    dispatch(createSoftwarePost({title, category, image, description, content, user_photo: 'photo.jpg', user_name: userState.user.name + " " + userState.user.lastname}) as any)
  }

  useEffect(() => {
    if(success){
      setIsOpen(true);
      reset();
      setTitle('')
      setCategory('')
      setDescription('')
      setContent('')
    }
  }, [success])

  

  return (
    <div className="screen screen-100">
       <Breadcrumbs items={["Software", "Create Post"]} />
    
      <HeaderScreen title="Create a post">
        <Button className="primary" onClick={onSubmit}>Publish</Button>
      </HeaderScreen>

      <div className="grid">
        <div>
        <Field label="Title" tip="Write a title for your post">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Category">
            <Select options={categories} value={category} onChange={setCategory} />
          </Field>
          <Field label="Image">
            <ImageInput  value={image} onChange={(e) => setImage(e.target.value)} />
          </Field>
          <Field label="Description" tip="Write a description">
            <Textarea value={description} onChange={(e) => setDescription(e.target.value) } />
          </Field>
        </div>
        <div>
        <Field label="Content">
            <TextEditor className="page" value={content} setValue={setContent} />
          </Field>
        </div>
      </div>

      <ConfirmModal title="Post created sucessfully" cancelText="Boom yeah!!!" isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default CreatePostSoftware;
