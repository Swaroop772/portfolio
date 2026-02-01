import sys

def extract_text(path, output_path):
    text_content = ""
    success = False
    
    # Try pypdf
    try:
        from pypdf import PdfReader
        print("Using pypdf...")
        reader = PdfReader(path)
        for i, page in enumerate(reader.pages):
            text_content += f"--- Page {i+1} ---\n"
            try:
                text_content += page.extract_text(extraction_mode="layout") + "\n"
            except:
                text_content += page.extract_text() + "\n"
        success = True
    except ImportError:
        print("pypdf not found")
    except Exception as e:
        print(f"pypdf error: {e}")

    if not success:
        # Try PyPDF2
        try:
            import PyPDF2
            print("Using PyPDF2...")
            reader = PyPDF2.PdfReader(path)
            for i, page in enumerate(reader.pages):
                text_content += f"--- Page {i+1} ---\n"
                text_content += page.extract_text() + "\n"
        except ImportError:
             text_content = "ERROR: No suitable PDF library found (pypdf, PyPDF2)."
        except Exception as e:
            text_content = f"PyPDF2 error: {e}"

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text_content)
    print(f"Wrote to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf.py <path_to_pdf>")
        sys.exit(1)
    extract_text(sys.argv[1], "extracted_text.txt")
