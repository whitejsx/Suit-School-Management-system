import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";


const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  
function QuickLinks() {
  return (
    <div>
        <div className="bg-white  mr-2 h-[50vh] flex">
            <div className="w-1/2 ">
              <div className="mr-4">
                <List
                  sx={{ style }}
                  component="nav"
                  aria-label="mailbox folders"
                >
                  <ListItem button>
                    <ListItemText primary="Upload result" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary="Print student result" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Lession Note" />
                  </ListItem>
                  <Divider light />
                  <ListItem button>
                    <ListItemText primary="Fees" />
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="w-1/2 bg-slate-800">
              <div className="block shadow-xs bg-white  rounded-sm dark:bg-neutral-700 h-full overflow-scroll overflow-x-hidden">
                <div className="border-b-2 bg-blue-100 flex p-2 border-neutral-100 justify-between px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      />
                    </svg>
                    Notice Board
                  </div>
                  <div className="flex text-gray-700 justify-around cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" "></div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default QuickLinks