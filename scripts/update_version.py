import json
import os
import argparse
import sys

def update_version(file_path: str, new_version: str):
    if not os.path.exists(file_path):
        print(f"⚠️  Datei nicht gefunden: {file_path}")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"❌ Fehler beim Parsen von {file_path}: {e}")
            return

    if "version" not in data:
        print(f"⚠️  Keine 'version' in {os.path.basename(file_path)}")
        return

    old_version = data["version"]
    data["version"] = new_version

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
        f.write('\n')  # JSON-Dateien enden typischerweise mit Newline

    print(f"✅ {os.path.basename(file_path)}: Version geändert von {old_version} → {new_version}")

def run_npm_install():
    print("🚀 npm install wird ausgeführt...")
    result = os.system('npm install')
    if result != 0:
        print("❌ Fehler bei npm install")
        sys.exit(1)
    print("✅ npm install abgeschlossen.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Update version in package.json and vss-extension.json")
    parser.add_argument("version", help="New version number (e.g. 1.2.3)")

    args = parser.parse_args()
    new_version = args.version

    current_dir = os.path.dirname(os.path.abspath(__file__))
    parent_dir = os.path.dirname(current_dir)
    print(f"📁 Arbeitsverzeichnis: {parent_dir}")

    update_version(os.path.join(parent_dir, "package.json"), new_version)
    update_version(os.path.join(parent_dir, "vss-extension.json"), new_version)

    run_npm_install()
