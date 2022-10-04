import CopyLinkButton from "@/components/shared/CopyLinkButton";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import TextEditor from "@/components/shared/TextEditor";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Delete from "./Delete";
import styles from "./IssueDetails.module.css";
import Loader from "./Loader";
import Type from "./Type";

interface Props {
  issueId?: string;
  setIsOpen: Function;
}
const IssueDetails = ({ issueId, setIsOpen }: Props) => {

    const loading = true;

    if(!loading) return <Loader />

  return (
    <>
      <div className={styles.top_actions}>
        <Type issueType="BUG-1179" />
        <div className={styles.top_actions_right}>
          <CopyLinkButton />
          <Delete />
          <Link to="/kanban" className={styles.close}>
            <i className="bx bx-x"></i>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <div>

        <Field>
          <Input
            value="Key terms to know"
            className="none"
            fontSize="2.5rem"
            fontWeight="600"
          />
        </Field>
        <Field>
            <div className="auto_page">

          <TextEditor
            value="Key terms to know


Issues
A Jira 'issue' refers to a single work item of any type or size that is tracked from creation to completion. For example, an issue could be a feature being developed by a software team, a to-do item for a marketing team, or a contract that needs to be written by a legal team.



Projects
A project is, quite simply, a collection of issues that are held in common by purpose or context. Issues grouped into projects can be configured in a variety of ways, ranging from visibility restrictions to available workflows.



Workflows
Workflows represent the sequential path an issues takes from creation to completion. A basic workflow might look something like this:"
          />
            </div>

        </Field>
        </div>
    <div>

        <Field label="STATUS">

            <Select></Select>
        </Field>
        
        <Field label="ASSIGNEES">
            <Select></Select>
        </Field>
        
        <Field label="REPORTER">

            <Select></Select>
        </Field>
        
        <Field label="PRIORITY">
            <p>Low</p>
            
        </Field>
        
        <Field label="ORIGINAL STIMATE (HOURS)">
            <Input></Input>
        </Field>
    </div>
      </div>
    </>
  );
};

export default IssueDetails;
