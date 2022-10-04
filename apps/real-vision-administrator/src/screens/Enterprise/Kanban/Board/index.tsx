import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import HeaderScreen from "@/components/shared/Header";
import Modal from "@/components/shared/Modal";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router-dom";
import IssueCreate from "../IssueCreate";
import IssueDetails from "../IssueDetails";
import Lists from "../Lists";

const Board = () => {
  const {issueId} = useParams();
  const  params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  console.log(issueId);
  console.log(params);
  return (
    <>
      <Breadcrumbs items={["Enterprise", "Kanban", "Projects"]} />
      <HeaderScreen title="Kanban Board">
        <Button className="primary" onClick={() => setIsOpen(true)}>
          Create Issue
        </Button>
      </HeaderScreen>
      <Lists />
      {issueId && (

            <Modal
              className="modal"
              isOpen={true}
              setIsOpen={() => {}}
              testid="modal:issue-details"
              variant="center"
              onClose={(modal: any) => {}}
              width={1024}
              withCloseIcon={false}
              renderContent={(modal: any) => (
                <IssueDetails
                  setIsOpen={setIsOpen}
                  // issueId={issueId}
                />
              )}
                />
                )}


            <Modal
              className="modal"
              isOpen={isOpen}
              setIsOpen={() => {}}
              testid="modal:issue-details"
              variant="center"
              onClose={(modal: any) => {}}
              width={1024}
              withCloseIcon={false}
              renderContent={(modal: any) => (
                <IssueCreate
                setIsOpen={setIsOpen}
                  // issueId={issueId}
                />
              )}
            />

    </>
  );
};

export default Board;
