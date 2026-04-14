import { jsPDF } from "jspdf";

export const generateCertificate = (userName, score, date) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Background Sóbrio (Bordas)
  doc.setDrawColor(30, 41, 59); // Slate-800
  doc.setLineWidth(1.5);
  doc.rect(5, 5, pageWidth - 10, pageHeight - 10);
  
  doc.setDrawColor(59, 130, 246); // Blue-500
  doc.setLineWidth(0.5);
  doc.rect(7, 7, pageWidth - 14, pageHeight - 14);

  // Logo / Cabeçalho
  doc.setTextColor(30, 41, 59);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("CERTIFICADO DE APROVAÇÃO", pageWidth / 2, 40, { align: "center" });

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Concedido pela Plataforma PL-200 Premium SaaS", pageWidth / 2, 50, { align: "center" });

  // Corpo
  doc.setFontSize(18);
  doc.text("Certificamos que", pageWidth / 2, 75, { align: "center" });

  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(59, 130, 246);
  doc.text(userName.toUpperCase(), pageWidth / 2, 95, { align: "center" });

  doc.setTextColor(30, 41, 59);
  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text("concluiu com êxito o Simulado Avançado (Modo Prova Real), atingindo o índice de", pageWidth / 2, 115, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(`${score}% DE APROVEITAMENTO`, pageWidth / 2, 130, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text("demonstrando proficiência nos domínios oficiais da certificação Microsoft PL-200:", pageWidth / 2, 145, { align: "center" });
  
  doc.setFontSize(11);
  doc.text("Dataverse • Power Apps • Power Automate • Power BI • Power Pages • Copilot Studio", pageWidth / 2, 155, { align: "center" });

  // Rodapé
  doc.setFontSize(12);
  doc.text(`Emitido em: ${date}`, 30, pageHeight - 30);
  
  // Selo de Autenticidade (Simulado)
  doc.setDrawColor(59, 130, 246);
  doc.setFillColor(59, 130, 246);
  doc.circle(pageWidth - 50, pageHeight - 40, 15, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text("VERIFICADO", pageWidth - 50, pageHeight - 42, { align: "center" });
  doc.text("PL-200", pageWidth - 50, pageHeight - 38, { align: "center" });
  doc.text("PREMIUM", pageWidth - 50, pageHeight - 34, { align: "center" });

  // Assinatura
  doc.setTextColor(30, 41, 59);
  doc.setDrawColor(30, 41, 59);
  doc.line(pageWidth / 2 - 30, pageHeight - 35, pageWidth / 2 + 30, pageHeight - 35);
  doc.setFontSize(10);
  doc.text("Diretoria de Educação Tecnológica", pageWidth / 2, pageHeight - 30, { align: "center" });

  doc.save(`Certificado_PL200_${userName.replace(/\s/g, "_")}.pdf`);
};
