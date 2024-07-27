import React, { useState } from "react";

const DocsTab = ({ tab, setTab }) => {
  return (
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li onClick={() => setTab("AP")} class="me-2">
        <a
          href="#"
          aria-current="page"
          class={
            tab == "AP"
              ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }
        >
          Appointments
        </a>
      </li>
      <li onClick={() => setTab("SE")} class="me-2">
        <a
          href="#"
          class={
            tab != "AP"
              ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }
        >
          Settings
        </a>
      </li>
    </ul>
  );
};

export default DocsTab;
