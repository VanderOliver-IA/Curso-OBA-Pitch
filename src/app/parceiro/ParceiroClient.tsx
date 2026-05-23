"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import "./parceiro.css";

const DEFAULT_WHATSAPP_NUMBER = '5521976406960';
const UNIT_WHATSAPP: Record<string, string> = {
  'Tijuca': '5521967261725',
  'Méier': '5521976406960'
};

function FormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    whats: "",
    unit: "",
    restaurant: "",
    notes: "",
    utm: "",
    source: "folha_colorir_restaurante"
  });

  const [copyStatus, setCopyStatus] = useState("Copiar mensagem");
  const [showSuccess, setShowSuccess] = useState(false);
  const [finalLink, setFinalLink] = useState("");
  const [genericLink, setGenericLink] = useState("");

  useEffect(() => {
    document.body.classList.add("partner-page");
    return () => {
      document.body.classList.remove("partner-page");
    };
  }, []);

  useEffect(() => {
    const restaurant = searchParams.get("restaurante") || "";
    const unit = searchParams.get("unit") || "";
    const utm = searchParams.get("utm") || searchParams.get("utm_source") || "";

    setFormData(prev => ({
      ...prev,
      restaurant: restaurant,
      unit: ["Tijuca", "Méier", "Outra/Quero entender"].includes(unit) ? unit : "",
      utm: utm
    }));

    const genericMessage = 'Olá! Peguei a folha de colorir no restaurante parceiro e quero informações sobre matrícula gratuita + aula experimental da OBA.';
    setGenericLink(`https://wa.me/${DEFAULT_WHATSAPP_NUMBER}?text=${encodeURIComponent(genericMessage)}`);
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sanitizePhone = (value: string) => value.replace(/\D+/g, '');

  const buildMessage = (data: any) => {
    const lines = [
      'Olá! Quero garantir a matrícula gratuita e agendar a aula experimental da OBA.',
      '',
      `Criança: ${data.childName} (${data.childAge} anos)`,
      `Responsável: ${data.parentName}`,
      `WhatsApp: ${data.whats}`,
      `Unidade: ${data.unit}`,
      data.restaurant ? `Restaurante parceiro: ${data.restaurant}` : null,
      data.notes ? `Observação: ${data.notes}` : null,
      data.utm ? `UTM: ${data.utm}` : null,
      `Origem: ${data.source}`,
      '',
      'Pode me passar os próximos horários disponíveis?'
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleCopy = async () => {
    const data = {
      ...formData,
      childName: formData.childName.trim() || '[nome da criança]',
      childAge: formData.childAge.trim() || '[idade]',
      parentName: formData.parentName.trim() || '[responsável]',
      whats: sanitizePhone(formData.whats) || '[whatsapp]',
      unit: formData.unit || '[unidade]',
    };

    const msg = buildMessage(data);
    try {
      await navigator.clipboard.writeText(msg);
      setCopyStatus('Mensagem copiada');
      setTimeout(() => setCopyStatus('Copiar mensagem'), 1800);
    } catch (error) {
      alert('Não foi possível copiar automaticamente. Copie manualmente:\n\n' + msg);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { childName, childAge, parentName, whats, unit } = formData;
    
    if (!childName || !childAge || !parentName || !whats || !unit) {
      alert('Por favor, preencha os campos obrigatórios.');
      return;
    }

    const message = buildMessage({
      ...formData,
      whats: sanitizePhone(whats)
    });
    
    const whatsappNumber = UNIT_WHATSAPP[unit] || DEFAULT_WHATSAPP_NUMBER;
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setFinalLink(link);
    setShowSuccess(true);
    window.open(link, '_blank', 'noopener');
  };

  return (
    <>
      <section id="inicio" className="partner-hero">
        <div className="container partner-grid">
          <div className="partner-copy reveal reveal-up active">
            <h1>Página exclusiva para parceiros OBA</h1>
            <p>
              Se você escaneou o QR Code no restaurante parceiro, esta condição é para você:
              <strong> matrícula 100% gratuita</strong> e <strong>aula experimental inclusa</strong>.
            </p>
            <div className="partner-badges">
              <span className="partner-badge"><i className="fas fa-gift"></i> Matrícula gratuita</span>
              <span className="partner-badge"><i className="fas fa-pencil-alt"></i> A partir de 6 anos</span>
              <span className="partner-badge"><i className="fas fa-map-marker-alt"></i> Méier e Tijuca</span>
            </div>
            <a href="#form" className="btn btn-primary btn-lg">Quero garantir minha vaga</a>
          </div>

          <div className="partner-image-wrap reveal reveal-up active">
            <picture>
              <source srcSet="/images/matriculagratis.webp" type="image/webp" />
              <img src="/images/matriculagratis.png" alt="Matrícula gratuita na Oficina Belas Artes" width={640} height={640} loading="eager" />
            </picture>
          </div>
        </div>
      </section>

      <section className="partner-content section-padding">
        <div className="container partner-layout">
          <article className="partner-card reveal reveal-up active">
            <h2>Por que a OBA funciona para crianças?</h2>
            <p>Aulas práticas com metodologia por faixa etária, focadas no desenvolvimento artístico e pessoal.</p>

            <div className="partner-benefits">
              <div className="partner-benefit">
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                <div><strong>Foco e concentração</strong> com exercícios progressivos e orientação próxima.</div>
              </div>
              <div className="partner-benefit">
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                <div><strong>Criatividade e autoconfiança</strong> com evolução visível em cada etapa.</div>
              </div>
              <div className="partner-benefit">
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                <div><strong>Coordenação e percepção visual</strong> com técnicas adaptadas para a idade.</div>
              </div>
            </div>

            <div className="partner-urgency">
              <i className="fas fa-exclamation-triangle" aria-hidden="true"></i> Benefício válido para novos alunos e sujeito à disponibilidade de horários.
            </div>
          </article>

          <article className="partner-card reveal reveal-up active" id="form">
            <h2>Garanta a matrícula gratuita agora</h2>
            <p id="restaurantHint">
              {formData.restaurant 
                ? <>Detectamos o restaurante parceiro: <strong>{formData.restaurant}</strong>. Complete para reservar sua matrícula gratuita.</>
                : "Preencha em menos de 1 minuto. Você finaliza o agendamento no WhatsApp."
              }
            </p>

            <form id="leadForm" className="partner-form" autoComplete="on" onSubmit={handleSubmit}>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor="childName">Nome da criança</label>
                  <input id="childName" name="childName" placeholder="Ex.: Ana Clara" required value={formData.childName} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="childAge">Idade</label>
                  <input id="childAge" name="childAge" type="number" min="3" max="17" placeholder="Ex.: 8" required value={formData.childAge} onChange={handleChange} />
                </div>
              </div>

              <div className="field-grid">
                <div className="field">
                  <label htmlFor="parentName">Nome do responsável</label>
                  <input id="parentName" name="parentName" placeholder="Ex.: Fernanda" required value={formData.parentName} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="whats">WhatsApp (com DDD)</label>
                  <input id="whats" name="whats" inputMode="tel" placeholder="Ex.: 21999998888" required value={formData.whats} onChange={handleChange} />
                </div>
              </div>

              <div className="field-grid">
                <div className="field">
                  <label htmlFor="unit">Unidade de interesse</label>
                  <select id="unit" name="unit" required value={formData.unit} onChange={handleChange}>
                    <option value="" disabled>Selecione</option>
                    <option value="Tijuca">Tijuca</option>
                    <option value="Méier">Méier</option>
                    <option value="Outra/Quero entender">Outra / Quero entender</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="restaurant">Restaurante parceiro</label>
                  <input id="restaurant" name="restaurant" placeholder="Ex.: Nome do restaurante" value={formData.restaurant} onChange={handleChange} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="notes">Observação (opcional)</label>
                <textarea id="notes" name="notes" placeholder="Ex.: melhor horário para contato, interesse em mangá, etc." value={formData.notes} onChange={handleChange}></textarea>
              </div>

              <div className="partner-actions">
                <button className="btn btn-primary" type="submit">Reservar e finalizar no WhatsApp</button>
                <button className="btn btn-secondary" type="button" onClick={handleCopy}>{copyStatus}</button>
                {genericLink && (
                  <a className="btn btn-hero-glass" href={genericLink} target="_blank" rel="noopener noreferrer">Falar no WhatsApp agora</a>
                )}
              </div>

              <div className="partner-small">
                Ao continuar, você concorda em receber contato da OBA para agendamento da aula experimental.
              </div>

              {showSuccess && (
                <div className="partner-success" id="successBox">
                  <h3>Reserva registrada com sucesso.</h3>
                  <p>Clique para finalizar seu atendimento com a equipe OBA no WhatsApp.</p>
                  <a className="btn btn-primary" href={finalLink} target="_blank" rel="noopener noreferrer">Finalizar no WhatsApp</a>
                </div>
              )}
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default function ParceiroClient() {
  return (
    <Suspense fallback={<div className="container py-20 text-center">Carregando formulário...</div>}>
      <FormContent />
    </Suspense>
  );
}
