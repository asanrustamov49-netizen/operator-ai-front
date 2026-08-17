import {
  File,
  FileText,
  Folder,
  Image,
  MoreHorizontal,
  Search,
  Upload,
} from "lucide-react";

import scss from "./oneDrive.module.scss";

const folders = [
  {
    id: 1,
    name: "Documents",
    files: 12,
  },
  {
    id: 2,
    name: "Projects",
    files: 8,
  },
  {
    id: 3,
    name: "Images",
    files: 24,
  },
];

const files = [
  {
    id: 1,
    name: "Operator AI.pdf",
    type: "PDF",
    size: "2.4 MB",
    date: "Today",
    icon: FileText,
  },
  {
    id: 2,
    name: "Calendar project.docx",
    type: "DOCX",
    size: "1.8 MB",
    date: "Today",
    icon: FileText,
  },
  {
    id: 3,
    name: "Dashboard design.png",
    type: "PNG",
    size: "4.2 MB",
    date: "Yesterday",
    icon: Image,
  },
  {
    id: 4,
    name: "Project files.zip",
    type: "ZIP",
    size: "12.6 MB",
    date: "Yesterday",
    icon: File,
  },
];

const OneDrive = () => {
  return (
    <main className={scss.oneDrive}>
      <div className={scss.top}>
        <div>
          <p className={scss.subtitle}>Cloud storage</p>
          <h1>OneDrive</h1>
        </div>

        <button className={scss.uploadButton}>
          <Upload size={18} />
          Upload file
        </button>
      </div>

      <div className={scss.search}>
        <Search size={19} />
        <input placeholder="Search files and folders..." />
      </div>

      <section className={scss.foldersSection}>
        <div className={scss.sectionHeader}>
          <h2>Folders</h2>
          <button>View all</button>
        </div>

        <div className={scss.folders}>
          {folders.map((folder) => (
            <button className={scss.folder} key={folder.id}>
              <Folder size={30} />

              <div>
                <strong>{folder.name}</strong>
                <span>{folder.files} files</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className={scss.filesSection}>
        <div className={scss.sectionHeader}>
          <h2>Recent files</h2>

          <button>View all</button>
        </div>

        <div className={scss.files}>
          {files.map((file) => {
            const Icon = file.icon;

            return (
              <div className={scss.file} key={file.id}>
                <div className={scss.fileIcon}>
                  <Icon size={22} />
                </div>

                <div className={scss.fileInfo}>
                  <strong>{file.name}</strong>

                  <span>
                    {file.type} · {file.size} · {file.date}
                  </span>
                </div>

                <button
                  className={scss.moreButton}
                  aria-label={`More options for ${file.name}`}
                >
                  <MoreHorizontal size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default OneDrive;
